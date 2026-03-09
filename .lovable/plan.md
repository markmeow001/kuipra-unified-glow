
# Kuipra Communications 企業官網建置計畫

## 概覽
建立一個雙語（中/英）企業形象網站，所有內容由 Supabase 資料庫驅動，並附帶簡易後台管理系統（需登入）。

---

## 1. 設計系統
- **主色 (Primary)**：深海軍藍 `#0a1c3a`
- **強調色 (Accent)**：亮橘色 `#f96b00`
- **區塊底色交替**：白底與深藍底交替排列，深藍底區塊使用白色文字
- **Logo**：暫以文字 "KUIPRA" 搭配樣式呈現
- **圖標**：使用 lucide-react
- **圖片**：暫用高品質佔位圖
- **全站響應式設計 (RWD)**：手機、平板、桌面皆支援

---

## 2. 多語系架構 (i18n)
- 使用 `react-i18next` 實作語言切換
- Navbar 右側加入語言切換按鈕（En / 中文）
- 靜態 UI 文字（按鈕、導覽列標籤等）由 i18n JSON 檔管理
- 動態內容（文案、團隊、專案等）從資料庫讀取對應語言欄位（`title_en` / `title_zh`）

---

## 3. 前端組件拆分
依照設計稿拆分為以下獨立組件：

| 組件 | 說明 |
|------|------|
| **Navbar** | Logo、導覽連結、語言切換器、Contact 按鈕 |
| **HeroSection** | 左側大標題 + 右側圖片，下方四個橘色統計數字卡片 |
| **Services** | 2×2 深藍色服務卡片網格 |
| **AboutUs** | 左文字 + 橘色按鈕，右裝飾圖 |
| **Timeline** | 01–04 垂直流程節點（Featured Service） |
| **Banner** | 滿版背景圖 + 置中文字與按鈕 |
| **Team** | 2×2 橘色團隊成員卡片 |
| **Projects** | 條列式專案列表 + 橘色標籤 |
| **Clients** | 水平排列企業 Logo 佔位圖 |
| **Contact** | 地圖區塊 + 聯絡資訊 |
| **Footer** | 頁尾導覽連結與版權資訊 |

所有按鈕皆有 hover 過渡動畫。

---

## 4. Supabase 資料庫設計
建立以下資料表，所有文字欄位皆有 `_en` / `_zh` 雙語版本：

- **`site_content`**：管理所有區塊文案（Hero 標題、About Us 介紹、Banner 文字、Services 區塊標題等），以 `section_key` 區分
- **`team_members`**：name、role_en/zh、description_en/zh、image_url
- **`projects`**：client_name、tags、title_en/zh、description_en/zh、image_url
- **`services`**：icon_name、title_en/zh、description_en/zh

---

## 5. 前端資料串接
- 首頁載入時從 Supabase 撈取所有資料表內容
- 載入中顯示 Skeleton Loading 骨架屏動畫
- 根據目前語言狀態顯示對應語言欄位

---

## 6. 認證與後台管理
- **認證**：使用 Supabase Auth（Email/Password 登入）
- **登入頁**：`/login` 頁面
- **Admin 後台**：`/admin` 路由（登入後才能訪問）
  - 以表格形式列出 `team_members`、`projects`、`services`、`site_content` 資料
  - 提供「新增」與「編輯」功能的完整 CRUD 介面
- **密碼重設**：`/reset-password` 頁面
- **角色管理**：建立 `user_roles` 表，僅 admin 角色可存取後台

---

## 7. 實作順序
1. 設計系統與 Tailwind 配置
2. i18n 架構與翻譯檔
3. 所有前端組件（使用佔位資料）
4. Supabase 資料表建立與 RLS 設定
5. 前端串接資料庫 + Skeleton Loading
6. 認證系統與 Admin 後台 CRUD
