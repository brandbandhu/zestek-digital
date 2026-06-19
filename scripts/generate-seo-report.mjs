import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { jsPDF } from "jspdf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const reportsDir = path.join(projectRoot, "reports");

const reportDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date());

const fileDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const outputFile = path.join(reportsDir, `zestek-client-seo-report-one-page-${fileDate}.pdf`);

const COLORS = {
  navy: [0, 31, 93],
  accent: [244, 107, 45],
  accentSoft: [255, 241, 232],
  bg: [247, 249, 252],
  line: [223, 229, 238],
  text: [34, 41, 47],
  muted: [96, 107, 121],
  card: [255, 255, 255],
};

const keywordGroups = [
  {
    title: "Brand + local",
    keywords:
      "Zestek Digital LLP, Zestek Digital Solutions, printer solutions Mumbai, printer dealer Mumbai, managed print services Mumbai, business printer solutions India",
  },
  {
    title: "Service + trust",
    keywords:
      "Epson printer dealer India, Konica Minolta dealer India, printer service support Mumbai, printer AMC Mumbai, printer installation support, Epson warranty support",
  },
  {
    title: "Product + intent",
    keywords:
      "Epson EM-C8100 printer India, Epson M5500 printer India, Epson EcoTank printers India, Epson WorkForce printers India, RC machine alternative India, printer ROI calculator",
  },
  {
    title: "Commercial + content",
    keywords:
      "managed print services India, office printer fleet management, print cost optimization, MPS provider Mumbai, commercial printer solutions India, commercial print solutions",
  },
];

const technicalItems = [
  "GA4 installed site-wide with measurement ID G-WVMD9919BT.",
  "robots.txt and sitemap.xml are live for crawler discovery.",
  "Canonical URLs, Open Graph, Twitter cards, and structured data are enabled across pages.",
  "Page-level metadata is applied automatically for all major routes.",
];

const searchConsoleItems = [
  "Verify the domain property in Google Search Console.",
  "Submit https://zestek.in/sitemap.xml for indexing.",
  "Monitor Coverage, Sitemaps, and Page indexing reports.",
  "Request indexing for key service and product pages after major updates.",
];

const pdf = new jsPDF({
  orientation: "portrait",
  unit: "pt",
  format: "a4",
});

const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();
const margin = 36;
const contentWidth = pageWidth - margin * 2;

pdf.setProperties({
  title: "Zestek Website SEO Report",
  subject: "One-page SEO summary for client sharing",
  author: "Zestek Digital Solutions",
  creator: "Codex",
});

const setFont = (size, style = "normal", color = COLORS.text) => {
  pdf.setFont("helvetica", style);
  pdf.setFontSize(size);
  pdf.setTextColor(...color);
};

const drawWrappedText = (text, x, y, width, options = {}) => {
  const {
    size = 10,
    style = "normal",
    color = COLORS.text,
    lineHeight = size * 1.35,
  } = options;

  setFont(size, style, color);
  const lines = pdf.splitTextToSize(text, width);
  pdf.text(lines, x, y);
  return y + lines.length * lineHeight;
};

const drawBulletList = (items, x, y, width, options = {}) => {
  const { size = 10, bulletGap = 11, itemGap = 7, color = COLORS.text } = options;
  let currentY = y;

  items.forEach((item) => {
    const wrapped = pdf.splitTextToSize(item, width - bulletGap);
    setFont(size, "normal", color);
    pdf.text("-", x, currentY);
    pdf.text(wrapped, x + bulletGap, currentY);
    currentY += wrapped.length * size * 1.28 + itemGap;
  });

  return currentY;
};

const drawLabelCard = (x, y, w, label, value) => {
  pdf.setFillColor(...COLORS.card);
  pdf.setDrawColor(...COLORS.line);
  pdf.roundedRect(x, y, w, 74, 12, 12, "FD");

  pdf.setFillColor(...COLORS.accentSoft);
  pdf.roundedRect(x + 14, y + 14, 34, 34, 10, 10, "F");

  pdf.setFillColor(...COLORS.accent);
  pdf.circle(x + 31, y + 31, 7, "F");

  setFont(8.5, "bold", COLORS.muted);
  pdf.text(label.toUpperCase(), x + 58, y + 28);
  setFont(11, "bold", COLORS.navy);
  const lines = pdf.splitTextToSize(value, w - 72);
  pdf.text(lines, x + 58, y + 46);
};

const sectionTitle = (title, y) => {
  pdf.setDrawColor(...COLORS.line);
  pdf.setFillColor(...COLORS.bg);
  pdf.roundedRect(margin, y, contentWidth, 28, 8, 8, "F");
  pdf.setFillColor(...COLORS.accent);
  pdf.rect(margin + 10, y + 6, 4, 10, "F");
  setFont(12, "bold", COLORS.navy);
  pdf.text(title, margin + 22, y + 18);
  return y + 40;
};

fs.mkdirSync(reportsDir, { recursive: true });

// Header band
pdf.setFillColor(...COLORS.navy);
pdf.rect(0, 0, pageWidth, 102, "F");
pdf.setFillColor(...COLORS.accent);
pdf.rect(0, 96, pageWidth, 6, "F");

setFont(24, "bold", [255, 255, 255]);
pdf.text("SEO Optimization Report", margin, 40);
setFont(11, "normal", [237, 242, 248]);
pdf.text("Client-ready summary for Zestek.in", margin, 60);
setFont(10, "bold", [255, 214, 182]);
pdf.text(`Prepared on ${reportDate}`, margin, 80);

setFont(10, "bold", [255, 255, 255]);
pdf.text("Website", pageWidth - margin - 130, 34);
setFont(14, "bold", [255, 255, 255]);
pdf.text("zestek.in", pageWidth - margin - 130, 54);
setFont(9, "normal", [237, 242, 248]);
pdf.text("SEO, GA4, and Search Console ready", pageWidth - margin - 130, 74);

// Summary cards
const cardY = 122;
const cardGap = 12;
const cardWidth = (contentWidth - cardGap * 2) / 3;
drawLabelCard(margin, cardY, cardWidth, "Analytics", "GA4 installed");
drawLabelCard(margin + cardWidth + cardGap, cardY, cardWidth, "Search Console", "Sitemap + robots live");
drawLabelCard(margin + (cardWidth + cardGap) * 2, cardY, cardWidth, "SEO Focus", "Local keyword coverage");

let y = 214;

y = sectionTitle("Primary SEO keywords used on the website", y);
const sectionIntro = drawWrappedText(
  "The site is now optimized around brand, local, service, product, and content-led search intent.",
  margin,
  y,
  contentWidth,
  {
    size: 10,
    color: COLORS.muted,
    lineHeight: 13,
  },
);

y = sectionIntro + 8;

keywordGroups.forEach((group, index) => {
  if (index > 0) {
    y += 8;
  }

  setFont(10, "bold", COLORS.navy);
  pdf.text(group.title, margin, y);
  setFont(9.5, "normal", COLORS.text);
  const lines = pdf.splitTextToSize(group.keywords, contentWidth - 18);
  pdf.text(lines, margin + 16, y + 14);
  y += 14 + lines.length * 12 + 4;
});

y += 8;

y = sectionTitle("Technical SEO implemented", y);
y = drawBulletList(technicalItems, margin, y, contentWidth, {
  size: 10,
  color: COLORS.text,
});

y += 4;
y = sectionTitle("Google Search Console setup", y);
y = drawBulletList(searchConsoleItems, margin, y, contentWidth, {
  size: 10,
  color: COLORS.text,
});

const footerY = pageHeight - 34;
pdf.setDrawColor(...COLORS.line);
pdf.line(margin, footerY - 18, pageWidth - margin, footerY - 18);
setFont(9, "normal", COLORS.muted);
pdf.text("Prepared by Zestek Digital Solutions", margin, footerY - 2);
pdf.text(`Report date: ${reportDate}`, pageWidth - margin - 120, footerY - 2);

const pdfData = pdf.output("arraybuffer");
fs.writeFileSync(outputFile, Buffer.from(pdfData));

console.log(`Generated ${outputFile}`);
