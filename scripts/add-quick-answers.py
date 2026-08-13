#!/usr/bin/env python3
"""One-off: insert quickAnswer frontmatter into the scheduled article batch.

Inserts a `quickAnswer: '...'` line immediately before the `faq:` key (or
before the closing `---` when a post has no faq block). Safe to re-run: files
that already contain a quickAnswer key are skipped.
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src" / "content" / "blog"

ANSWERS = {
    "ai-chatbots-small-business": {
        "en": "Install a chatbot only if you get a high volume of repetitive questions and a meaningful share arrive after hours — that's where a bot genuinely pays for itself. If enquiries are few or mostly need judgment, a well-built FAQ page and inbox reply templates solve the same problem for free, without the risk of a bot inventing policies you never had.",
        "zh": "只有當你有大量重複性問題、而且相當比例是下班後進來的，AI 客服才真正划算。如果詢問量不大、或多半需要人為判斷，一頁好的 FAQ 加上罐頭回覆範本就能免費解決同樣的問題，還不用擔心機器人捏造你根本沒有的政策。",
    },
    "clinic-marketing-guide-vancouver": {
        "en": "Clinics in BC grow fastest by dominating Google Maps, publishing patient-education content, and building bilingual trust — not by running testimonial ads, which are largely prohibited for regulated health professionals in Canada. Get the compliance basics right first, then invest in the channels patients actually use to choose a provider.",
        "zh": "BC 的診所要成長，最有效的是把 Google 地圖經營到位、持續產出衛教內容、建立雙語信任——而不是投見證式廣告，那在加拿大對受監管的醫療專業人員大多是被禁止的。先把合規基本功做對，再把預算投進病人真正用來挑診所的渠道。",
    },
    "local-partnerships-sponsorship-marketing": {
        "en": "Local partnerships work because they transfer trust: another business or community organization vouching for you reaches people ads can't convince. Pick partners who share your customers but not your offer, structure the deal around what each side measurably contributes, and activate the sponsorship — a logo on a banner does nothing by itself.",
        "zh": "在地合作有效的原因是信任轉移：由另一個商家或社區組織替你背書，能觸及廣告說服不了的人。挑客群重疊但產品不重疊的夥伴，把合作條件建立在雙方可衡量的貢獻上，而且贊助要「做活」——光是把 logo 掛在布條上，什麼都不會發生。",
    },
    "realtor-personal-branding-vancouver": {
        "en": "In a market with 15,000 licensed agents, generic 'trusted advisor' branding disappears. The realtors who win referrals pick a narrow niche — a neighbourhood, a property type, a community — publish consistent content that proves local knowledge, show up in the channels their audience actually uses (including Chinese platforms), and keep every claim compliant with BCFSA advertising rules.",
        "zh": "在一個有 15,000 名持牌經紀的市場，泛泛的「值得信賴的顧問」人設等於隱形。真正贏得轉介的經紀，會選一個夠窄的利基——一個社區、一種物件、一個族群——用穩定的內容證明在地專業，出現在目標客群真正使用的渠道（包括華語平台），同時讓每一句宣傳都符合 BCFSA 的廣告規範。",
    },
    "visual-identity-basics-small-business": {
        "en": "A small business doesn't need a brand book — it needs four things used consistently everywhere: one primary colour plus an accent, at most two typefaces, one recognisable photo style, and a logo that's still legible at 40 pixels. Consistency across those four beats a beautiful identity applied haphazardly.",
        "zh": "小生意不需要品牌規範手冊，需要的是四樣東西、而且到處都用得一致：一個主色加一個輔色、最多兩種字體、一套認得出來的照片風格、一個縮到 40 像素還看得清的 logo。這四樣的一致性，勝過一套漂亮卻用得零零落落的識別。",
    },
    "google-ads-vs-seo-small-business": {
        "en": "Google Ads buys visibility instantly and stops the moment you stop paying; SEO compounds slowly and keeps working after the invoices stop. For most Vancouver small businesses the right answer is a sequence, not a choice: start with a small ads budget to learn which keywords convert, then reinvest into SEO on the proven winners.",
        "zh": "Google 廣告是立刻買到曝光、停止付費就歸零；SEO 是慢慢累積、停了之後還持續有效。對多數溫哥華小生意，正確答案是先後順序而不是二選一：先用小額廣告預算測出哪些關鍵字真的會轉換，再把驗證過的贏家投入 SEO 長期經營。",
    },
    "lush-social-media-exit-teardown": {
        "en": "Lush quit its main social platforms in 2021 and kept selling — because two decades of brand equity, a strong email list, distinctive products and physical stores did the work Instagram was credited with. The lesson for local businesses isn't 'quit social'; it's that owned channels — your list, your site, your regulars — are the asset, and rented reach should feed them.",
        "zh": "Lush 在 2021 年退出主要社群平台，生意照做——因為二十年的品牌資產、強大的 email 名單、有辨識度的產品和實體店，做了原本被歸功給 Instagram 的事。給在地商家的教訓不是「退出社群」，而是自有渠道——你的名單、你的網站、你的熟客——才是資產，租來的流量應該回頭餵養它們。",
    },
    "roots-heritage-brand-teardown": {
        "en": "Roots turned a national identity into a product system: a beaver logo, cabin-and-campfire storytelling, and salt-and-pepper sweats that make 'Canadian-ness' wearable. It's a bigger phenomenon in Taiwan than at home because heritage branding travels — abroad, the myth is the product. Sell the story your customers want to belong to, not just the goods.",
        "zh": "Roots 把國家認同做成了一套產品系統：海狸 logo、小木屋與營火的敘事、Salt & Pepper 棉褲，讓「加拿大感」變成穿得上身的東西。它在台灣比在本土還紅，正因為文化敘事出了國反而更值錢——在海外，神話本身就是產品。給品牌的啟示：賣顧客想歸屬的故事，而不只是商品。",
    },
    "vancouver-marketing-channels-costs": {
        "en": "In Vancouver right now, budget roughly $500–1,500/month in Google Ads spend plus $300–1,000 for management, $500–2,000+/month for outsourced social media, $100–500 per micro-influencer post, and $750–3,000/month for full local SEO. Below about $500–1,000/month total, paid channels can't gather enough data to optimize — so fund one channel properly instead of spreading across three.",
        "zh": "以現在的溫哥華行情：Google 廣告每月投放約 $500–1,500 外加 $300–1,000 代操費、社群外包每月 $500–2,000 起、微型 KOL 每篇 $100–500、完整在地 SEO 每月 $750–3,000。總預算低於每月 $500–1,000 時，付費渠道連優化所需的數據都收集不夠——所以與其三個渠道各撒一點，不如把一個渠道投足。",
    },
    "restaurant-marketing-guide-vancouver": {
        "en": "For a Vancouver restaurant the order of operations matters more than any single tactic: first make Google Maps and your review flow flawless, then get menu photos and short video working on social — including Xiaohongshu if you want Chinese-speaking diners — then fix your delivery-app economics, and only then spend on promotion. A regulars list you own beats another month of ads.",
        "zh": "對溫哥華餐廳，做事的順序比任何單一招數都重要：先把 Google 地圖和評論流程做到無懈可擊，再讓菜色照片和短影音在社群上跑起來——想接華語客就加上小紅書——接著整頓外送平台的抽成經濟學，最後才是花錢做推廣。一份自己擁有的熟客名單，勝過再投一個月廣告。",
    },
    "website-conversion-audit-checklist": {
        "en": "If your site gets visitors but no enquiries, the leak is almost always one of four things: visitors can't tell within seconds what you do and for whom, nothing on the page earns their trust, contacting you takes too much effort, or you're not measuring where people drop off. Run the 12-point audit in this guide — most fixes take an afternoon, not a redesign.",
        "zh": "網站有流量卻沒詢問，漏水點幾乎都在四件事裡：訪客幾秒內看不出你是做什麼的、頁面上沒有任何東西建立信任、聯絡你太費力、或你根本沒在追蹤人是在哪一步流失的。跑一遍這份 12 點體檢——多數修法一個下午就能完成，不需要整站改版。",
    },
    "canada-small-business-marketing-grants": {
        "en": "The famous federal digital-marketing grants — CDAP, Grow Your Business Online, Launch Online — are all closed. What's genuinely still open to BC small businesses in 2026: the B.C. Employer Training Grant, which can cover marketing-skills training, and CanExport for businesses selling outside Canada, plus some sector and municipal programs. Don't build a marketing plan around money that no longer exists.",
        "zh": "那些有名的聯邦數位行銷補助——CDAP、Grow Your Business Online、Launch Online——已經全數關閉。2026 年 BC 小生意真正還申請得到的，是可涵蓋行銷技能培訓的 B.C. Employer Training Grant、給外銷企業的 CanExport，加上部分產業別和市政計畫。別把行銷計畫建立在已經不存在的錢上。",
    },
    "short-form-video-guide-vancouver": {
        "en": "You don't need a studio — you need a repeatable system: two or three formats you can film on a phone (a making-of, a talking tip, a before-and-after), a sustainable cadence of two to three posts a week, and a hook in the first two seconds. On Reels, TikTok and Xiaohongshu, consistency and format repetition drive reach far more than production value.",
        "zh": "你不需要攝影棚，需要的是一套可重複的系統：兩三種手機就能拍的格式（製作過程、對鏡頭講一個重點、before/after）、每週二到三支的可持續節奏、以及前兩秒就出現的鉤子。在 Reels、TikTok 和小紅書上，穩定輸出和格式重複帶來的觸及，遠大於製作精緻度。",
    },
    "landing-page-conversion-tracking-guide": {
        "en": "Most ad budgets die between the click and the sale: traffic lands on a generic homepage and nobody measures what happens next. Send every campaign to a dedicated landing page with one offer and one action, wire up GA4 plus the ad platform's conversion tracking, and you'll finally know your true cost per lead — usually within a week of data.",
        "zh": "多數廣告預算死在點擊和成交之間：流量被丟到泛用的首頁，然後沒有人量測接下來發生什麼。把每檔活動導到專屬落地頁——一個提案、一個行動——接好 GA4 和廣告平台的轉換追蹤，通常一週的數據就能讓你第一次知道每個詢問的真實成本。",
    },
    "restaurant-food-visual-content-guide": {
        "en": "Your food is the ad: diners decide from photos before they read a word. Shoot in natural light near a window, get close enough to show texture, keep plates and backgrounds simple, and refresh your Google Business Profile photos as often as your social feed — that's where hungry searchers actually look. Outsource the hero menu shoot; handle the daily short video yourself.",
        "zh": "你的菜就是你的廣告：客人在讀任何文字之前，早就先用照片做了決定。靠窗用自然光拍、靠近到拍得出口感質地、盤面和背景保持簡單，而且 Google 商家檔案的照片要跟社群一樣勤更新——飢餓的搜尋者真正看的是那裡。主視覺菜單照外包給專業，每天的短影音自己拍。",
    },
    "cafe-marketing-guide-vancouver": {
        "en": "Vancouver cafés and bubble tea shops win by engineering the check-in: an interior corner worth photographing, one signature drink people order by name, and a Google and Instagram presence that keeps every customer photo working for you. Discoverability compounds — each shared photo is unpaid distribution, so design the shop and menu to make sharing effortless.",
        "zh": "溫哥華的咖啡店和飲品店，贏在把「打卡」設計進生意裡：一個值得拍的角落、一杯客人會指名的招牌飲品，加上讓每張顧客照片都替你工作的 Google 與 Instagram 經營。被發現是會複利的——每一張顧客分享的照片都是沒付錢的曝光，所以店面和菜單要設計到讓分享毫不費力。",
    },
}


def yaml_quote(text: str) -> str:
    return "'" + text.replace("'", "''") + "'"


def insert(path: Path, answer: str) -> str:
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    if any(l.startswith("quickAnswer:") for l in lines):
        return "skip (already present)"
    line = f"quickAnswer: {yaml_quote(answer)}\n"
    # Prefer inserting right before the faq block; fall back to the closing ---.
    for i, l in enumerate(lines):
        if l.startswith("faq:"):
            lines.insert(i, line)
            break
    else:
        closes = [i for i, l in enumerate(lines) if l.rstrip() == "---"]
        if len(closes) < 2:
            return "ERROR: no closing frontmatter fence"
        lines.insert(closes[1], line)
    path.write_text("".join(lines), encoding="utf-8")
    return "ok"


def main() -> int:
    failures = 0
    for key, langs in ANSWERS.items():
        for lang, answer in langs.items():
            path = ROOT / lang / f"{key}.md"
            if not path.exists():
                print(f"MISSING {path}")
                failures += 1
                continue
            result = insert(path, answer)
            print(f"{result:28s} {lang}/{key}")
            if result.startswith("ERROR"):
                failures += 1
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
