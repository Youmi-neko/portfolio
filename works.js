/* ============================================================
   ここだけ書き換えれば、ページが更新されます。

   作品を足すとき:
   下の WORKS の「いちばん上」に、次のような一行を足してください。
   新しい作品ほど上に並びます。

     { title: "作品のタイトル", youtube: "動画ID" },

   動画IDは、YouTubeのURL  https://www.youtube.com/watch?v=ここの部分  です。
   ニコニコ動画なら  youtube の代わりに  nico: "sm12345678"  と書きます。

   あとから足せる項目(いらなければ書かなくて大丈夫):
     date: "2026.10"            ← 右上に日付が出ます
     tags: ["MV", "Cover"]      ← 書くと、上に絞り込みボタンが出ます
     credit: "担当: 映像ディレクション"  ← 動画を開いたとき下に出ます
     thumb: "images/xxx.jpg"    ← サムネイルを自分の画像にしたいとき
   ============================================================ */

const PROFILE = {
  name: "Youmi / ゆうみ",
  role: "MV制作／映像ディレクション etc…",
  email: "yumikoe127@gmail.com",
  x: { label: "Karure", url: "https://x.com/karure0401" },
  note: "スケジュールによっては、Karureでお受けできないかご相談させていただくことがあります。ご了承ください。"
};

const REEL = { title: "2026 REEL", youtube: "omorVhClIqc" };

const WORKS = [
  { title: "レディース・ロール・メソッド", youtube: "M09RG8NWSD8" },
  { title: "Echo of Whale〜心の音〜（Japanese ver.）/Cover", youtube: "gnxjPKYg1q0" },
  { title: "HIMEHINA×Hakos Baelz『ULTRA C』Cover", youtube: "V7dA4PX5AUs" },
  { title: "ヰ世界情緒 #76「深海のフレイム」", youtube: "gJnOOfMJyqk" },
  { title: "「芽生え」Liella! Story Music Video", youtube: "VVlvG1_QpbM" },
  { title: "旅に帰る / 望月穂波 × 日野森雫 × 小豆沢こはね × 朝比奈まふゆ × 巡音ルカ", youtube: "SGwB23JvKjc" },
  { title: "「Dasvidaniya」 / Covered by kahoca", youtube: "Aat9tLl0kzw" },
  { title: "半可燃 - 初音ミク / Hankanen - Hatsune Miku", youtube: "A-onmUItNII" },
  { title: "うざって〜な.../sabio feat.重音テト 鏡音レン", youtube: "sPLvt4nPuwo" },
  { title: "Navy / 梓川", youtube: "NJqTSGz3KaU" },
  { title: "「電池切れ、叱責」║ 橘孝星(CV.佐藤悠雅)", youtube: "S0EVzxkhkWA" },
  { title: "無料生配信 / 梓川", youtube: "SKmBJj-rYJA" },
  { title: "熊乃ベアトリーチェ「SIGNAL ROAD」", youtube: "4kWRr1O5o0I" },
  { title: "ユニークエンド ｰ 初音ミク", youtube: "aDk9C41J5Cc" },
  { title: "淡単 - 重音テト(Constant - KasaneTeto)", youtube: "0qQJOwEKuu8" },
  { title: "翠彩花 / 英リサ", youtube: "NofzQj3raQM" },
  { title: "ふかしにおどり (feat.重音テトSV)", youtube: "MDbAkVO-a9o" },
  { title: "GROW GLOW / POPY＆ROSE", nico: "sm45323606" },
  { title: "unravel／タケヤキ翔×ばぁう歌ってみた", youtube: "724wvC9MHmM" },
  { title: "ナンセンスゲーム - 流水● (NonsenseGame - Rusui)", youtube: "n5C9jxiUkTw" },
  { title: "ナンセンスゲーム - 重音テト (NonsenseGame - KasaneTeto)", youtube: "Efvez_xtDew" },
  { title: "madeleine (feat.日和) / しおばにら", youtube: "ur0RYBqtMKg" },
  { title: "NEW EP 「契永詩」 - 雨良 Amala / Official XFD", youtube: "h4oQ7x624O8" },
  { title: "メアの教育 / covered by Dame", youtube: "Z6qOk-gGW20" },
  { title: "アリフレーション - 初音ミク (ARIFRESHON - Hatsune Miku)", youtube: "4thcMKIMBYE" },
  { title: "Astraea - 瞬く星達のために。", youtube: "4gIfx8zHSI4" },
  { title: "ゲレンデがとけるほど恋したい - 広瀬香美 を歌った / LON", youtube: "CfF4xjJnX3M" },
  { title: "躁ハッピー / 知声+MAKARU", youtube: "PtBhBZuxG9o" },
  { title: "春嵐 arrange ver. / 鳥丸 (Cover)", youtube: "x7hNltapr0Y" },
  { title: "僕の魔法少女/ 初音ミク×歌愛ユキ - My Puella Magi", youtube: "0ddFlZ4xVjk" },
  { title: "異星にいこうね/メメントモリ子cover", youtube: "SWxpeevMGC8" },
  { title: "僕が死ぬまで / flower@MAKARU", youtube: "ftr9S5A6kjE" },
  { title: "午前六時のブギウギ（Never↓and ver ） 歌ってみた/公乃ポチ", youtube: "pPMrD7oGER4" },
  { title: "パンダヒーロー / 初兎 × 悠佑", youtube: "N1xrRr7z4gY" },
  { title: "煉獄讃歌 / flower@MAKARU", youtube: "mWh9gg2ttbE" },
  { title: "貴方だけが、幸せでありますように。 / 緑仙 Cover", youtube: "ZeLYECu8rmI" }
];
