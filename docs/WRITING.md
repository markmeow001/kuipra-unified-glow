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
- 待辦：**9/7 轉換體檢文上線後**，把 clinic-marketing 和 google-ads-vs-seo 兩組（雙語共 4 檔）被拆掉的連結補回。

## 不用做的事

- llms.txt 已存在,維持現狀即可;Google 官方明言 Search(含 AI 功能)不讀取它。
- 不要為了 GEO 堆關鍵字或灌水——研究顯示無效,且 GBP 端會被停權。

## 技術備忘

- `quickAnswer`、`updatedDate` 定義在 `src/content.config.ts`,渲染在 `src/components/ArticlePage.astro`。
- 批次插入 quickAnswer 可參考 `scripts/add-quick-answers.py`(冪等,已含 2026-08 批次)。
- IndexNow 於部署時自動提交變更頁面,無需手動。
