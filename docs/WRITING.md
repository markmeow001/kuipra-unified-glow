# Journal 寫作規範(SEO + GEO)

適用於所有新文章批次與舊文更新。依據 2026-08 的 GEO 研究調整:帶來源的統計(+25.9% AI 引用率)、專家引語(+27.8%)、明示引用來源(+24.9%)是實證上最有效的三種寫法。

## 每篇文章必備

1. **`quickAnswer` frontmatter**(必填)
   - 2–4 句,直接回答標題提出的問題,可獨立被 AI 引用。
   - 出現在文首「The short answer / 快速答案」區塊,雙語各自撰寫(不是互譯)。
   - 內含數字時必須與內文一致——先寫內文,再摘 quickAnswer。

2. **`faq` frontmatter**(必填,3 題起)
   - 問題用讀者真實會問的口語問法;答案 2–4 句、可獨立成立。
   - 自動輸出 FAQPage schema,是 AI Overviews 與 AI 助理的主要抽取來源。

3. **帶來源的統計與引語**(盡量)
   - 數據要能指出來源(官方統計、具名研究、平台官方數字),文內以連結標注。
   - 不確定的數字寧可不寫;絕不編造統計。
   - 有具名專家或客戶的直接引語時優先放入。

4. **商業意圖優先**
   - 資訊型內容(how-to/what-is)的流量會被 AI Overviews 吃掉 20–40%,寫它的目的是「被引用、建立認知」。
   - 會帶詢問的是:怎麼選、比較、價格、在地案例。每波批次至少一半是這類。
   - 每篇都連回相關服務頁至少一次。

## 更新循環(對抗 AI 引用池的新鮮度衰退)

- AI 引用池 3–5 天收錄新內容,但舊內容會衰退;目標:**每篇文章至多 8 週更新一次**。
- 更新 = 實質改動(補新數據、改建議、加 quickAnswer/FAQ),然後設 `updatedDate`。
  純改錯字不算,不要只改日期不改內容。
- 每次排程批次上線時,順手挑 2–3 組最舊的已發布文章做更新。
- 已完成:2026-08-12 更新 brand-strategy、chinese-community、GEO guide 三組(加 quickAnswer + updatedDate)。

## 內鏈紅線

- **不可向前引用發布日晚於自己的文章**——早發布的那篇會掛著 404 連結直到對方上線。要引用就先確認對方的 pubDate 早於（或等於）自己。
- 已完成（2026-09-09）：9/7 轉換體檢文上線後，clinic-marketing 與 google-ads-vs-seo 兩組（雙語共 4 檔）被拆掉的連結已補回。

## 重複題目：判準是「意圖」不是「主題」

同一主題寫很多篇是**好事**——那叫主題叢集，會累積該領域的權威訊號。我們光小紅書就有三篇，彼此不打架：
餐廳垂直一篇、平台比較一篇、商業意圖（自己做還是找代操）一篇。三個不同的問題。

會出問題的只有一種情況：**兩篇對準同一個查詢、同一個搜尋意圖、同一個漏斗階段**。那時候：

- Google 對單一查詢基本上只會從同一個網域挑**一篇**排上去，所以你不會有兩次機會，只有一次，而且是它替你選。
- 訊號被拆開：內鏈、外部連結、互動數據、「誰才是那個答案」全部分散到兩個 URL。兩篇各 50% 的權重，排得比一篇 100% 差。
- 它可能挑錯那篇，而且會隨時間換來換去，造成排名不穩定。
- 對 AI 引用同樣不利：兩篇近乎重複的頁面會讓「哪一篇是正解」變模糊，收斂的頁面才容易被引用。

**動手前先問：這篇回答了哪個現有頁面沒回答的問題？**講不出來，就不要寫新的——去強化既有那篇（補內容、補內鏈、更新）。

反過來也成立：如果某一篇正在硬扛兩種不同意圖而兩邊都做不好，那就該拆。判準永遠是意圖，不是篇幅。

案例：2026-09-09 原訂寫「小紅書代操怎麼選」，發現 08-15 的 xiaohongshu-marketing-vancouver 已對準同一查詢，
改為從三篇相關文章補 6 處內鏈（它原本入站內鏈掛零）。

## 內容檢查（pre-commit）

`npm run check:content` — 也會在 commit 動到 `src/content/blog/`、`public/blog-images/`
或 `src/content.config.ts` 時自動跑（hook 在 `.githooks/pre-commit`）。

擋下的錯誤（exit 1）：

1. `description` 超過 200 字元 —— **schema 硬上限，超了 astro build 直接紅**
2. 缺必填欄位（title / description / pubDate / lang / translationKey / category）
3. `lang` 欄位與所在目錄不符
4. 只有 en 或只有 zh —— 少一邊 hreflang 與語言切換都會壞
5. 兩語版本的 `translationKey` 不一致
6. `heroImage` 指向 `public/` 裡不存在的檔案
7. 內鏈指向不存在的 slug
8. 內鏈跨語言（zh 文章連到 en 網址）
9. **向前引用**：連到「發布日晚於自己、且尚未發布」的文章 —— 中間那段時間會 404。
   兩篇都已發布時不算違規（順序就不重要了）。

警告（不擋，exit 0）：`description` 超過 190，離硬上限太近。

**注意：`core.hooksPath` 是本機 git 設定，不會跟著 clone 走。**
新環境（含另一台機器上的 Codex）要跑一次：

```
git config core.hooksPath .githooks
```

要跳過檢查：`git commit --no-verify`。

## 不用做的事

- llms.txt 已存在,維持現狀即可;Google 官方明言 Search(含 AI 功能)不讀取它。
- 不要為了 GEO 堆關鍵字或灌水——研究顯示無效,且 GBP 端會被停權。

## 技術備忘

- `quickAnswer`、`updatedDate` 定義在 `src/content.config.ts`,渲染在 `src/components/ArticlePage.astro`。
- 批次插入 quickAnswer 可參考 `scripts/add-quick-answers.py`(冪等,已含 2026-08 批次)。
- IndexNow 於部署時自動提交變更頁面,無需手動。
