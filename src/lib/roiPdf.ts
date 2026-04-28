import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type ExportRoiPdfOptions = {
  companyName: string;
  snapshotElement: HTMLElement | null;
};

const PAGE_MARGIN = 24;

const sanitizeFilePart = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || "company";

export const exportRoiPdf = async ({ companyName, snapshotElement }: ExportRoiPdfOptions) => {
  if (!snapshotElement) {
    throw new Error("ROI snapshot element not found.");
  }

  const canvas = await html2canvas(snapshotElement, {
    backgroundColor: "#ffffff",
    logging: false,
    scale: 2,
    scrollX: 0,
    scrollY: -window.scrollY,
    useCORS: true,
    windowWidth: Math.max(snapshotElement.scrollWidth, snapshotElement.clientWidth),
    windowHeight: Math.max(snapshotElement.scrollHeight, snapshotElement.clientHeight),
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const renderWidth = pageWidth - PAGE_MARGIN * 2;
  const renderHeight = pageHeight - PAGE_MARGIN * 2;
  const pixelsPerPoint = canvas.width / renderWidth;
  const maxSliceHeight = Math.floor(renderHeight * pixelsPerPoint);

  let sourceY = 0;
  let pageIndex = 0;

  while (sourceY < canvas.height) {
    const sliceHeight = Math.min(maxSliceHeight, canvas.height - sourceY);
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = canvas.width;
    pageCanvas.height = sliceHeight;

    const context = pageCanvas.getContext("2d");

    if (!context) {
      throw new Error("Unable to prepare ROI snapshot image.");
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    context.drawImage(canvas, 0, sourceY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

    if (pageIndex > 0) {
      pdf.addPage();
    }

    const renderedSliceHeight = (sliceHeight * renderWidth) / canvas.width;
    pdf.addImage(
      pageCanvas.toDataURL("image/png"),
      "PNG",
      PAGE_MARGIN,
      PAGE_MARGIN,
      renderWidth,
      renderedSliceHeight,
      undefined,
      "FAST",
    );

    sourceY += sliceHeight;
    pageIndex += 1;
  }

  const fileName = `zestek_roi_snapshot_${sanitizeFilePart(companyName)}_${new Date().toISOString().slice(0, 10)}.pdf`;
  pdf.save(fileName);
};
