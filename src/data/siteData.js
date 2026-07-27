import heroPort from "../assets/images/hero-port.jpg";
import serviceCustoms from "../assets/images/service-customs.jpg";
import serviceLogistics from "../assets/images/service-logistics.jpg";
import serviceTech from "../assets/images/service-tech.jpg";
import aboutOffice from "../assets/images/about-office.jpg";
import goodsFood from "../assets/images/goods-food.jpg";
import goodsSundries from "../assets/images/goods-sundries.jpg";
import goodsPlant from "../assets/images/goods-plant.jpg";
import goodsElectronics from "../assets/images/goods-electronics.jpg";
import goodsExport from "../assets/images/goods-export.jpg";
import goodsImport from "../assets/images/goods-import.jpg";
import blogHsCode from "../assets/images/blog-hscode.jpg";
import blogRegulation from "../assets/images/blog-regulation.jpg";
import blogTrade from "../assets/images/blog-trade.jpg";

export const images = {
  heroPort,
  serviceCustoms,
  serviceLogistics,
  serviceTech,
  aboutOffice,
};

const blogImageByCategory = {
  HSコード: blogHsCode,
  通関規制: blogRegulation,
  貿易実務: blogTrade,
};

export const company = {
  name: "ブルーオーシャンスター株式会社",
  nameEn: "Blue Ocean Star Co., Ltd.",
  established: "2021年6月10日",
  ceoName: "小林 惠",
  ceo: "代表取締役　小林 惠",
  headOffice: "東京都中央区日本橋本町4丁目11番8号　日本橋本町RSビル401号室",
  salesOffice: "大阪府堺市堺区栄橋町1-7-7　中ビル4A",
  overseasOffice: "鄭州市鄭東新区緑地中心南塔54楼",
  address: "東京都中央区日本橋本町4丁目11番8号　日本橋本町RSビル401号室",
  capital: "690万円",
  bank: "三井住友銀行、住信SBIネット銀行",
  license: "通関業許可（2024年2月取得）",
  businessList: [
    "輸出入通関サービス（通関業許可取得）",
    "国際物流一貫輸送サービス",
    "国内陸送手配サービス",
    "倉庫保管",
    "税関事務管理人（ACP）サービス",
  ],
  business: "輸出入通関サービス / 国際物流一貫輸送サービス / 国内陸送手配サービス / 倉庫保管 / 税関事務管理人（ACP）サービス",
  tel: "03-1234-5678",
  email: "info@blueoceanstar.co.jp",
};

export const navLinks = [
  { to: "/", label: "TOP" },
  { to: "/about", label: "会社概要" },
  { to: "/services", label: "サービス一覧" },
  { to: "/goods", label: "商品別対応ガイド" },
  { to: "/blog", label: "お役立ち情報" },
  { to: "/faq", label: "よくあるご質問" },
  { to: "/recruit", label: "採用情報" },
];

export const stats = [
  { value: "1,200+", label: "年間通関実績件数" },
  { value: "98.6%", label: "通関スムーズ完了率" },
  { value: "45+", label: "対応国・地域数" },
  { value: "24h", label: "見積り初回回答" },
];

export const homeServices = [
  {
    icon: "customs",
    image: serviceCustoms,
    title: "輸出入通関代行",
    desc: "HSコード調査から申告書作成、税関対応まで一括代行。食品・動植物・機械など複雑品目にも対応します。",
  },
  {
    icon: "logistics",
    image: serviceLogistics,
    title: "国際物流・フォワーディング",
    desc: "インコタームズ選定、フォワーダー選定、コスト最適化まで。海外現地パートナーと連携した最適ルートをご提案。",
  },
  {
    icon: "tech",
    image: serviceTech,
    title: "スマート物流（物流DX）",
    desc: "ITプラットフォームによる進捗の可視化、自動書類作成、データ連携で貿易実務を効率化します。",
  },
];

export const servicesDetail = [
  {
    id: "customs",
    image: serviceCustoms,
    title: "輸出入通関代行",
    tag: "CUSTOMS CLEARANCE",
    lead: "複雑な品目・規制にも対応する、通関のプロフェッショナルサービス。",
    body: "HSコード調査・申告書作成・税関対応まで一括代行いたします。食品・動植物・機械など、専門知識が必要な複雑品目にも自社の通関士・専門スタッフが対応。輸出入規制の事前確認から必要書類の準備、税関との折衝まで、お客様の負担をゼロに近づけます。",
    points: [
      "HSコード調査・分類サポート",
      "輸出入申告書類の作成・電子申告",
      "食品・動植物検疫、機械類などの許認可対応",
      "税関検査・追加照会への現地対応",
    ],
  },
  {
    id: "logistics",
    image: serviceLogistics,
    title: "国際物流コンサルティング",
    tag: "LOGISTICS CONSULTING",
    lead: "最適な輸送ルートとコストバランスを、経験豊富なコンサルタントが設計。",
    body: "インコタームズの選定、最適なフォワーダーの選定、コスト最適化、トラブル発生時の対応アドバイスまで、貿易実務全体をサポートします。海上・航空輸送それぞれのメリットを踏まえ、リードタイムとコストの両面から最適な物流スキームをご提案します。",
    points: [
      "インコタームズ・契約条件の選定サポート",
      "フォワーダー選定・比較・コスト最適化",
      "海上/航空輸送ルートの提案",
      "輸送トラブル・遅延時の緊急対応",
    ],
  },
  {
    id: "smart",
    image: serviceTech,
    title: "スマート物流（物流DX）",
    tag: "LOGISTICS DX",
    lead: "ITの力で貿易実務を自動化し、見える化する次世代プラットフォーム。",
    body: "独自開発のITプラットフォームにより、通関ステータスのリアルタイム可視化、書類の自動生成、データ連携APIなどを提供。属人化しがちな貿易実務を標準化・自動化し、担当者の負担を大幅に削減します。",
    points: [
      "通関・物流ステータスのリアルタイム可視化",
      "申告書類・インボイスの自動生成",
      "基幹システムとのAPI連携",
      "データ分析による輸出入コストの見直し提案",
    ],
  },
];

export const goodsCategories = [
  {
    id: "food",
    image: goodsFood,
    title: "食品",
    en: "FOOD",
    desc: "食品衛生法・検疫対応が必要な加工食品・生鮮品の輸出入ガイド。",
    tips: ["食品衛生法に基づく届出", "原材料表示・添加物規制の確認", "検疫所への事前相談ポイント"],
  },
  {
    id: "sundries",
    image: goodsSundries,
    title: "雑貨・日用品",
    en: "SUNDRIES",
    desc: "アパレル・生活雑貨など、越境ECでも需要の高い品目の通関ポイント。",
    tips: ["PSEマーク等の対象品目確認", "関税分類（HSコード）のコツ", "小口混載輸送のコスト最適化"],
  },
  {
    id: "plant",
    image: goodsPlant,
    title: "植物・農産品",
    en: "PLANT",
    desc: "植物検疫が必要な種苗・観賞植物・農産物の輸出入対応ガイド。",
    tips: ["植物防疫法に基づく検査手続き", "輸出可能国・条件の事前確認", "検疫証明書の取得フロー"],
  },
  {
    id: "electronics",
    image: goodsElectronics,
    title: "電気製品",
    en: "ELECTRONICS",
    desc: "PSE・電波法など認証が絡む電気製品・家電の輸出入で押さえるべき点。",
    tips: ["PSEマーク・技術基準への適合", "リチウムイオン電池の輸送規制", "認証取得のスケジュール管理"],
  },
  {
    id: "export",
    image: goodsExport,
    title: "輸出全般",
    en: "EXPORT",
    desc: "日本から海外への輸出全般に関する手続き・注意点を解説。",
    tips: ["輸出貿易管理令の対象確認", "原産地証明書の取得", "海外バイヤー向け書類作成"],
  },
  {
    id: "import",
    image: goodsImport,
    title: "輸入全般",
    en: "IMPORT",
    desc: "海外から日本への輸入全般に関する手続き・注意点を解説。",
    tips: ["関税・消費税の計算方法", "輸入禁止・規制品目の確認", "個人輸入と法人輸入の違い"],
  },
];

export const blogPosts = [
  {
    id: "hs-code-basics",
    title: "HSコードとは？分類の基本と調べ方を徹底解説",
    category: "HSコード",
    date: "2026.06.20",
    excerpt: "貿易実務の基本となるHSコードの仕組みと、正しい分類方法・調べ方をわかりやすく解説します。",
  },
  {
    id: "customs-regulation-update",
    title: "2026年最新版｜輸入規制・関税制度の変更ポイント",
    category: "通関規制",
    date: "2026.06.12",
    excerpt: "直近の法改正・関税制度アップデートを踏まえ、輸入事業者が押さえるべきポイントをまとめました。",
  },
  {
    id: "incoterms-guide",
    title: "インコタームズ2020　貿易条件の選び方完全ガイド",
    category: "貿易実務",
    date: "2026.05.30",
    excerpt: "FOB・CIF・DDPなど代表的な貿易条件の違いと、自社に合った条件選定のポイントを解説します。",
  },
  {
    id: "cross-border-ec",
    title: "越境ECで失敗しない！個人輸入の通関チェックリスト",
    category: "貿易実務",
    date: "2026.05.18",
    excerpt: "個人事業主・越境EC利用者向けに、輸入時に見落としがちな通関の注意点をまとめました。",
  },
  {
    id: "food-import-flow",
    title: "食品輸入の流れと検疫手続きをステップで解説",
    category: "通関規制",
    date: "2026.05.02",
    excerpt: "食品を輸入する際に必要な検疫所への届出から通関までの流れをステップ形式で紹介します。",
  },
  {
    id: "hs-code-mistakes",
    title: "よくあるHSコード分類ミスとそのリスク",
    category: "HSコード",
    date: "2026.04.21",
    excerpt: "誤ったHSコード分類が招く追加関税・通関遅延のリスクと、防止するためのチェック方法を紹介。",
  },
].map((post) => ({ ...post, image: blogImageByCategory[post.category] }));

export const faqs = [
  {
    q: "通関代行の依頼から完了まで、どのくらい期間がかかりますか？",
    a: "品目や輸出入国により異なりますが、標準的な品目であれば書類受領後2〜3営業日で申告完了します。食品・動植物など許認可が必要な品目は、事前相談を含めて1〜2週間程度を目安としてください。",
  },
  {
    q: "個人事業主・個人輸入でも依頼できますか？",
    a: "はい、可能です。越境ECをご利用の個人事業主様、個人輸入をご検討の個人のお客様向けに、法人様とは別のシンプルなお見積りフォームをご用意しております。",
  },
  {
    q: "対応可能な品目に制限はありますか？",
    a: "食品・動植物・電気製品・化学品など幅広い品目に対応しておりますが、輸出入が禁止・制限されている品目についてはご相談時にご案内いたします。まずはお気軽にお問い合わせください。",
  },
  {
    q: "見積りは無料ですか？",
    a: "はい、お見積りは無料です。フォームご送信後、24時間以内（営業日）に担当者よりご連絡いたします。",
  },
  {
    q: "ITプラットフォームはどのように利用できますか？",
    a: "スタンダードプラン以上のお客様には専用ログインアカウントを発行し、通関・物流ステータスのリアルタイム確認や書類ダウンロードが可能な管理画面をご提供しています。",
  },
  {
    q: "対応エリア・言語を教えてください。",
    a: "現在は日本語での対応がメインですが、中国語対応スタッフも在籍しております。英語・中国語での書面対応も可能な場合がありますので、お問い合わせ時にご相談ください。",
  },
];

export const jobs = [
  {
    title: "通関士・通関スタッフ",
    type: "正社員",
    location: "東京本社",
    desc: "輸出入申告書類の作成、税関対応、お客様との折衝業務を担当。通関士資格をお持ちの方歓迎（資格取得支援あり）。",
  },
  {
    title: "国際物流コーディネーター",
    type: "正社員",
    location: "東京本社 / リモート可",
    desc: "フォワーダーとの手配、輸送ルートの提案、コスト管理など国際物流業務全般を担当します。",
  },
  {
    title: "ITエンジニア（物流DXプラットフォーム開発）",
    type: "正社員",
    location: "東京本社 / リモート可",
    desc: "自社開発の物流ITプラットフォームの設計・開発・運用を担当。React / Node.js 等の経験者歓迎。",
  },
  {
    title: "海外営業（中国語対応）",
    type: "正社員・契約社員",
    location: "東京本社",
    desc: "中国・アジア圏の輸入バイヤー・パートナー企業への営業、関係構築を担当。中国語ビジネスレベル必須。",
  },
];

export const history = [
  { year: "2021.06", event: "ブルーオーシャンスター株式会社　設立（東京都中央区日本橋本町）" },
  { year: "2024.02", event: "通関業許可を取得、輸出入通関サービスを開始" },
  { year: "2024〜", event: "大阪営業所を開設し、国内陸送・倉庫保管サービスを拡充" },
  { year: "現在", event: "鄭州（中国）に海外拠点を設置し、税関事務管理人（ACP）サービスなど国際物流一貫体制を強化" },
];
