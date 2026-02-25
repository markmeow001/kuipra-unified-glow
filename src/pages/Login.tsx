import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error: err } = await signIn(email, password);
    if (err) {
      setError(err.message);
    } else {
      navigate("/admin");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <form onSubmit={handleSubmit} className="bg-background rounded-lg p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-6 text-center">
          <span className="text-orange">K</span>UIPRA Admin
        </h1>
        {error && <p className="text-destructive text-sm mb-4 text-center">{error}</p>}
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-orange text-orange-foreground hover:bg-orange/90">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </div>
        <p className="text-center mt-4">
          <button type="button" onClick={() => navigate("/reset-password")} className="text-sm text-orange hover:underline">
            Forgot password?
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
