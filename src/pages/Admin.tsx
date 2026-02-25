import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Navigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut, Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Tab = "team_members" | "projects" | "services" | "site_content";

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("team_members");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Skeleton className="h-12 w-48" /></div>;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin) return <div className="min-h-screen flex items-center justify-center text-foreground"><p>Access denied. Admin role required.</p></div>;

  const tabs: Tab[] = ["team_members", "projects", "services", "site_content"];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold"><span className="text-orange">K</span>UIPRA Admin</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm opacity-80">{user.email}</span>
          <Button variant="ghost" size="sm" onClick={signOut} className="text-primary-foreground hover:text-orange">
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "bg-orange text-orange-foreground hover:bg-orange/90" : ""}
            >
              {tab.replace("_", " ")}
            </Button>
          ))}
        </div>

        {activeTab === "team_members" && <TeamTable />}
        {activeTab === "projects" && <ProjectsTable />}
        {activeTab === "services" && <ServicesTable />}
        {activeTab === "site_content" && <SiteContentTable />}
      </div>
    </div>
  );
};

/* ====== Team Members Table ====== */
const TeamTable = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editItem, setEditItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_team"],
    queryFn: async () => {
      const { data, error } = await supabase.from("team_members").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const upsert = useMutation({
    mutationFn: async (item: any) => {
      if (item.id) {
        const { error } = await supabase.from("team_members").update(item).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("team_members").insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_team"] });
      queryClient.invalidateQueries({ queryKey: ["team_members"] });
      setDialogOpen(false);
      toast({ title: "Saved!" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("team_members").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_team"] });
      queryClient.invalidateQueries({ queryKey: ["team_members"] });
      toast({ title: "Deleted" });
    },
  });

  const openNew = () => { setEditItem({ name: "", role_en: "", role_zh: "", description_en: "", description_zh: "", image_url: "", sort_order: 0 }); setDialogOpen(true); };

  if (isLoading) return <Skeleton className="h-48" />;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={openNew} className="bg-orange text-orange-foreground hover:bg-orange/90"><Plus size={16} /> Add</Button>
      </div>
      <Table>
        <TableHeader><TableRow>
          <TableHead>Name</TableHead><TableHead>Role (EN)</TableHead><TableHead>Role (ZH)</TableHead><TableHead>Order</TableHead><TableHead>Actions</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {data?.map((m) => (
            <TableRow key={m.id}>
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.role_en}</TableCell>
              <TableCell>{m.role_zh}</TableCell>
              <TableCell>{m.sort_order}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => { setEditItem(m); setDialogOpen(true); }}><Pencil size={14} /></Button>
                <Button size="sm" variant="ghost" onClick={() => del.mutate(m.id)}><Trash2 size={14} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editItem?.id ? "Edit" : "Add"} Member</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); upsert.mutate(editItem); }} className="space-y-3">
            {["name", "role_en", "role_zh", "description_en", "description_zh", "image_url"].map((f) => (
              <div key={f}>
                <Label>{f}</Label>
                <Input value={editItem?.[f] ?? ""} onChange={(e) => setEditItem({ ...editItem, [f]: e.target.value })} />
              </div>
            ))}
            <div><Label>sort_order</Label><Input type="number" value={editItem?.sort_order ?? 0} onChange={(e) => setEditItem({ ...editItem, sort_order: Number(e.target.value) })} /></div>
            <Button type="submit" className="w-full bg-orange text-orange-foreground hover:bg-orange/90">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

/* ====== Projects Table ====== */
const ProjectsTable = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editItem, setEditItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_projects"],
    queryFn: async () => {
      const { data, error } = await supabase.from("projects").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const upsert = useMutation({
    mutationFn: async (item: any) => {
      const payload = { ...item, tags: typeof item.tags === "string" ? item.tags.split(",").map((t: string) => t.trim()) : item.tags };
      if (item.id) {
        const { error } = await supabase.from("projects").update(payload).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("projects").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setDialogOpen(false);
      toast({ title: "Saved!" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast({ title: "Deleted" });
    },
  });

  const openNew = () => { setEditItem({ client_name: "", tags: "", title_en: "", title_zh: "", description_en: "", description_zh: "", image_url: "", sort_order: 0 }); setDialogOpen(true); };

  if (isLoading) return <Skeleton className="h-48" />;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={openNew} className="bg-orange text-orange-foreground hover:bg-orange/90"><Plus size={16} /> Add</Button>
      </div>
      <Table>
        <TableHeader><TableRow>
          <TableHead>Client</TableHead><TableHead>Title (EN)</TableHead><TableHead>Tags</TableHead><TableHead>Order</TableHead><TableHead>Actions</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {data?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.client_name}</TableCell>
              <TableCell>{p.title_en}</TableCell>
              <TableCell>{p.tags?.join(", ")}</TableCell>
              <TableCell>{p.sort_order}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => { setEditItem({ ...p, tags: p.tags?.join(", ") }); setDialogOpen(true); }}><Pencil size={14} /></Button>
                <Button size="sm" variant="ghost" onClick={() => del.mutate(p.id)}><Trash2 size={14} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editItem?.id ? "Edit" : "Add"} Project</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); upsert.mutate(editItem); }} className="space-y-3">
            {["client_name", "tags", "title_en", "title_zh", "description_en", "description_zh", "image_url"].map((f) => (
              <div key={f}>
                <Label>{f}{f === "tags" ? " (comma separated)" : ""}</Label>
                <Input value={editItem?.[f] ?? ""} onChange={(e) => setEditItem({ ...editItem, [f]: e.target.value })} />
              </div>
            ))}
            <div><Label>sort_order</Label><Input type="number" value={editItem?.sort_order ?? 0} onChange={(e) => setEditItem({ ...editItem, sort_order: Number(e.target.value) })} /></div>
            <Button type="submit" className="w-full bg-orange text-orange-foreground hover:bg-orange/90">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

/* ====== Services Table ====== */
const ServicesTable = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editItem, setEditItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_services"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const upsert = useMutation({
    mutationFn: async (item: any) => {
      if (item.id) {
        const { error } = await supabase.from("services").update(item).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("services").insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_services"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
      setDialogOpen(false);
      toast({ title: "Saved!" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("services").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_services"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast({ title: "Deleted" });
    },
  });

  const openNew = () => { setEditItem({ icon_name: "Globe", title_en: "", title_zh: "", description_en: "", description_zh: "", sort_order: 0 }); setDialogOpen(true); };

  if (isLoading) return <Skeleton className="h-48" />;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={openNew} className="bg-orange text-orange-foreground hover:bg-orange/90"><Plus size={16} /> Add</Button>
      </div>
      <Table>
        <TableHeader><TableRow>
          <TableHead>Icon</TableHead><TableHead>Title (EN)</TableHead><TableHead>Title (ZH)</TableHead><TableHead>Order</TableHead><TableHead>Actions</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {data?.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.icon_name}</TableCell>
              <TableCell>{s.title_en}</TableCell>
              <TableCell>{s.title_zh}</TableCell>
              <TableCell>{s.sort_order}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => { setEditItem(s); setDialogOpen(true); }}><Pencil size={14} /></Button>
                <Button size="sm" variant="ghost" onClick={() => del.mutate(s.id)}><Trash2 size={14} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editItem?.id ? "Edit" : "Add"} Service</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); upsert.mutate(editItem); }} className="space-y-3">
            {["icon_name", "title_en", "title_zh", "description_en", "description_zh"].map((f) => (
              <div key={f}>
                <Label>{f}</Label>
                <Input value={editItem?.[f] ?? ""} onChange={(e) => setEditItem({ ...editItem, [f]: e.target.value })} />
              </div>
            ))}
            <div><Label>sort_order</Label><Input type="number" value={editItem?.sort_order ?? 0} onChange={(e) => setEditItem({ ...editItem, sort_order: Number(e.target.value) })} /></div>
            <Button type="submit" className="w-full bg-orange text-orange-foreground hover:bg-orange/90">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

/* ====== Site Content Table ====== */
const SiteContentTable = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [editItem, setEditItem] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["admin_site_content"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_content").select("*").order("section_key");
      if (error) throw error;
      return data;
    },
  });

  const upsert = useMutation({
    mutationFn: async (item: any) => {
      if (item.id) {
        const { error } = await supabase.from("site_content").update(item).eq("id", item.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("site_content").insert(item);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_site_content"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      setDialogOpen(false);
      toast({ title: "Saved!" });
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("site_content").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_site_content"] });
      queryClient.invalidateQueries({ queryKey: ["site_content"] });
      toast({ title: "Deleted" });
    },
  });

  const openNew = () => { setEditItem({ section_key: "", content_en: "", content_zh: "" }); setDialogOpen(true); };

  if (isLoading) return <Skeleton className="h-48" />;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={openNew} className="bg-orange text-orange-foreground hover:bg-orange/90"><Plus size={16} /> Add</Button>
      </div>
      <Table>
        <TableHeader><TableRow>
          <TableHead>Section Key</TableHead><TableHead>Content (EN)</TableHead><TableHead>Content (ZH)</TableHead><TableHead>Actions</TableHead>
        </TableRow></TableHeader>
        <TableBody>
          {data?.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.section_key}</TableCell>
              <TableCell className="max-w-xs truncate">{c.content_en}</TableCell>
              <TableCell className="max-w-xs truncate">{c.content_zh}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => { setEditItem(c); setDialogOpen(true); }}><Pencil size={14} /></Button>
                <Button size="sm" variant="ghost" onClick={() => del.mutate(c.id)}><Trash2 size={14} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editItem?.id ? "Edit" : "Add"} Content</DialogTitle></DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); upsert.mutate(editItem); }} className="space-y-3">
            <div><Label>section_key</Label><Input value={editItem?.section_key ?? ""} onChange={(e) => setEditItem({ ...editItem, section_key: e.target.value })} /></div>
            <div><Label>content_en</Label><Input value={editItem?.content_en ?? ""} onChange={(e) => setEditItem({ ...editItem, content_en: e.target.value })} /></div>
            <div><Label>content_zh</Label><Input value={editItem?.content_zh ?? ""} onChange={(e) => setEditItem({ ...editItem, content_zh: e.target.value })} /></div>
            <Button type="submit" className="w-full bg-orange text-orange-foreground hover:bg-orange/90">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Admin;
