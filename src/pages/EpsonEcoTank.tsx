import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductFilterPanel from "@/components/ProductFilterPanel";
import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { matchesSearchQuery, matchesSelectedOptions, toggleFilterValue } from "@/lib/productFilters";
import PageMeta from "@/components/PageMeta";
import ecoTankBreadcrumbImage from "../../assets/breadcrub/ecotank.png";

type EcoTankProduct = {
  name: string;
  sku: string;
  productUrl: string;
  imageUrl: string;
};

type EcoTankProductMeta = {
  description: string;
  highlights: string[];
  bestFor: string;
  inkUrl: string;
  paperSize: string;
  colourMode: string;
  usageType: string;
  functionType: string;
  features: string[];
  searchTerms: string[];
};

const productCards: EcoTankProduct[] = [
  {
    name: "EcoTank Monochrome M15180",
    sku: "C11CJ41507",
    productUrl:
      "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-Monochrome-M15180-A3-Wi-Fi-Duplex-Multi-Function-Ink-Tank-Printer/p/C11CJ41507",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=a2ea993c221f0956430f9ed78a26a6ea3f3efd72&vid=a2ea993c221f0956430f9ed78a26a6ea3f3efd72&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=M15140+4",
  },
  {
    name: "EcoTank L15180",
    sku: "C11CH71507",
    productUrl:
      "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L15180-A3-Wi-Fi-Duplex-Multi-Function-Ink-Tank-Printer/p/C11CH71507",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=971336a3289c5e62e48bb05c1de8c49e05cea44d&vid=971336a3289c5e62e48bb05c1de8c49e05cea44d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L15150_19Cah_FDL_Black_01_2",
  },
  {
    name: "EcoTank L130",
    sku: "C11CE58501",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L130-Single-Function-InkTank-Printer/p/C11CE58501",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=d19c0fd181c869a4d17636e23c33d5bc5b222897&vid=d19c0fd181c869a4d17636e23c33d5bc5b222897&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L130",
  },
  {
    name: "EcoTank L1250",
    sku: "C11CJ71507",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L1250-Single-Function-A4-Wi-Fi-Ink-Tank-Printer/p/C11CJ71507",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=1e211759fd22b4abe01103ce442209d7f3c4ce7e&vid=1e211759fd22b4abe01103ce442209d7f3c4ce7e&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L1250-%281%29",
  },
  {
    name: "EcoTank L3200",
    sku: "C11CJ69501",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3200-A4-All-in-One-Ink-Tank-Printer-%28Flipkart-Exclusive%29/p/C11CJ69501",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=94f6fafb79f477ac599e44c202f5b345d20779f3&vid=94f6fafb79f477ac599e44c202f5b345d20779f3&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=EKL_L3200_690_460_normal",
  },
  {
    name: "EcoTank L3210",
    sku: "C11CJ68506",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3210-A4-All-in-One-Ink-Tank-Printer/p/C11CJ68506",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=d60560b00fe766443f873ee2fdc6da1b9be04f59&vid=d60560b00fe766443f873ee2fdc6da1b9be04f59&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3210-%281%29",
  },
  {
    name: "EcoTank L3211",
    sku: "C11CJ68507",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3211-A4-All-in-One-Ink-Tank-Printer%28Amazon-Exclusive%29/p/C11CJ68507",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=94f6fafb79f477ac599e44c202f5b345d20779f3&vid=94f6fafb79f477ac599e44c202f5b345d20779f3&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=EKL_L3200_690_460_normal",
  },
  {
    name: "EcoTank L3212",
    sku: "C11CJ68508",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3212-A4-All-in-One-Ink-Tank-Printer/p/C11CJ68508",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=d60560b00fe766443f873ee2fdc6da1b9be04f59&vid=d60560b00fe766443f873ee2fdc6da1b9be04f59&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3210-%281%29",
  },
  {
    name: "EcoTank L3215",
    sku: "C11CJ68509",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3215-A4-All-in-One-Ink-Tank-Printer/p/C11CJ68509",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=39e87bbcd25b240a6bc3d7a8d1f22e6a0a689c0e&vid=39e87bbcd25b240a6bc3d7a8d1f22e6a0a689c0e&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3215+3255",
  },
  {
    name: "EcoTank L3216",
    sku: "C11CJ68511",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3216-A4-All-in-One-Ink-Tank-Printer/p/C11CJ68511",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=2d7290f36d5226edc2e05888dc0a238a23ace914&vid=2d7290f36d5226edc2e05888dc0a238a23ace914&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3216-%281%29",
  },
  {
    name: "EcoTank L3250",
    sku: "C11CJ67508",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3250-A4-Wi-Fi-All-in-One-Ink-Tank-Printer/p/C11CJ67508",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&vid=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3250-%281%29",
  },
  {
    name: "EcoTank L3251",
    sku: "C11CJ67509",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3251-A4-Wi-Fi-All-in-One-Ink-Tank-Printer-%28Flipkart-Exclusive%29/p/C11CJ67509",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&vid=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3250-%281%29",
  },
  {
    name: "EcoTank L3252",
    sku: "C11CJ67511",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3252-A4-Wi-Fi-All-in-One-Ink-Tank-Printer-%28Amazon-Exclusive%29/p/C11CJ67511",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&vid=3679c7960a7a7a1feea5c47e1ee23470f69c52b0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3250-%281%29",
  },
  {
    name: "EcoTank L3255",
    sku: "C11CJ67512",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3255-A4-Wi-Fi-All-in-One-Ink-Tank-Printer/p/C11CJ67512",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=39e87bbcd25b240a6bc3d7a8d1f22e6a0a689c0e&vid=39e87bbcd25b240a6bc3d7a8d1f22e6a0a689c0e&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3215+3255",
  },
  {
    name: "EcoTank L3256",
    sku: "C11CJ67513",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L3256-Wi-Fi-Multifunction-InkTank-Printer/p/C11CJ67513",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=a6cc6455cedfdedd70f90885592c1a9ff8c63aa5&vid=a6cc6455cedfdedd70f90885592c1a9ff8c63aa5&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3256",
  },
  {
    name: "EcoTank L3260",
    sku: "C11CJ66511",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3260-A4-Wi-Fi-All-in-One-Ink-Tank-Printer/p/C11CJ66511",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=275bc1edc07b7716321b0647b12db8e0043fd36d&vid=275bc1edc07b7716321b0647b12db8e0043fd36d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3260_SPT_C11CJ66301_384x286",
  },
  {
    name: "EcoTank L3560",
    sku: "C11CK58501",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L3560-A4-Wi-Fi-All-in-One-Ink-Tank-Printer/p/C11CK58501",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=00fde9898928df0b0a8f64f20bcd445b0a084fca&vid=00fde9898928df0b0a8f64f20bcd445b0a084fca&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L3560_SPT_C11CK58301_384x286",
  },
  {
    name: "EcoTank L4360",
    sku: "C11CL41506",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L4360-A4-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer/p/C11CL41506",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=b60a817262899db17ba54c434d854f462f24b1f2&vid=b60a817262899db17ba54c434d854f462f24b1f2&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L4360_Front",
  },
  {
    name: "EcoTank L5290",
    sku: "C11CJ65506",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L5290-A4-Wi-Fi-All-in-One-Ink-Tank-Printer-with-ADF/p/C11CJ65506",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=7a19b2a43566a34c916c5515b05e5371eccb95a0&vid=7a19b2a43566a34c916c5515b05e5371eccb95a0&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L5290",
  },
  {
    name: "EcoTank L6270",
    sku: "C11CJ61502",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-L6270-WiFi-Duplex-Multifunction-InkTank-Printer-with-ADF/p/C11CJ61502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=78aaf198f02ae7125d3809bc9cd32e20f8718ef5&vid=78aaf198f02ae7125d3809bc9cd32e20f8718ef5&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6270",
  },
  {
    name: "EcoTank L6360",
    sku: "C11CL42503",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L6360-A4-Wi-Fi-All-in-One-Ink-Tank-Printer/p/C11CL42503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=dee4081a654b862684da6603ba0ed88ed30f77a7&vid=dee4081a654b862684da6603ba0ed88ed30f77a7&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=24Lio3_MCL_blk_01",
  },
  {
    name: "EcoTank L6370",
    sku: "C11CL43502",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L6370-A4-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer/p/C11CL43502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=ad06197281acbc595c2531d8e2b02e3c197b3705&vid=ad06197281acbc595c2531d8e2b02e3c197b3705&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6370",
  },
  {
    name: "EcoTank L6390",
    sku: "C11CL40503",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L6390-A4-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer-with-Fax/p/C11CL40503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=ad06197281acbc595c2531d8e2b02e3c197b3705&vid=ad06197281acbc595c2531d8e2b02e3c197b3705&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6370",
  },
  {
    name: "EcoTank L6460",
    sku: "C11CJ89503",
    productUrl: "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L6460-A4-Ink-Tank-Printer/p/C11CJ89503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=56cc633e0e56e222fd98e39f62c49ff067a38a86&vid=56cc633e0e56e222fd98e39f62c49ff067a38a86&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6490-%281%29",
  },
  {
    name: "EcoTank L6490",
    sku: "C11CJ88503",
    productUrl: "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L6490-A4-Ink-Tank-Printer/p/C11CJ88503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=56cc633e0e56e222fd98e39f62c49ff067a38a86&vid=56cc633e0e56e222fd98e39f62c49ff067a38a86&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6490-%281%29",
  },
  {
    name: "EcoTank L6570",
    sku: "C11CJ29502",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L6570-Wi-Fi-Duplex-Multifunction-ADF-InkTank-Office-Printer/p/C11CJ29502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=87ff9e0b455a46e640699c11a661fa39427a1b58&vid=87ff9e0b455a46e640699c11a661fa39427a1b58&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L6570",
  },
  {
    name: "EcoTank L6580",
    sku: "C11CJ28503",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/EcoTank-L6580-Wi-Fi-Duplex-Multifunction-ADF-InkTank-Office-Printer-with-PCL-support/p/C11CJ28503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=12461e4bcdc48106d00f63740f274a963736931b&vid=12461e4bcdc48106d00f63740f274a963736931b&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=6580",
  },
  {
    name: "EcoTank L14150",
    sku: "C11CH96503",
    productUrl:
      "https://www.epson.co.in/For-Home/Printers/EcoTank-Printers/Epson-EcoTank-L14150-A3%2B-Wi-Fi-Duplex-Wide-Format-All-in-One-Ink-Tank-Printer/p/C11CH96503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=14ea44b499dce7df2cebf25225e27cf7b10e91b7&vid=14ea44b499dce7df2cebf25225e27cf7b10e91b7&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=19Lin_FAL_Black_01_2-1",
  },
  {
    name: "EcoTank L15150",
    sku: "C11CH72503",
    productUrl:
      "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L15150-A3-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer/p/C11CH72503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=971336a3289c5e62e48bb05c1de8c49e05cea44d&vid=971336a3289c5e62e48bb05c1de8c49e05cea44d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L15150_19Cah_FDL_Black_01_2",
  },
  {
    name: "EcoTank L15160",
    sku: "C11CH71502",
    productUrl:
      "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L15160-A3-Wi-Fi-Duplex-All-in-One-Ink-Tank-Printer/p/C11CH71502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=971336a3289c5e62e48bb05c1de8c49e05cea44d&vid=971336a3289c5e62e48bb05c1de8c49e05cea44d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L15150_19Cah_FDL_Black_01_2",
  },
];

const serviceSupportContactUrl = "/service#service-amc";
const salesPhoneNumber = "9920909700";
const salesPhoneHref = "tel:+919920909700";

type EcoTankFilterState = {
  paperSizes: string[];
  colourModes: string[];
  usageTypes: string[];
  functionTypes: string[];
  features: string[];
};

const createEmptyEcoTankFilters = (): EcoTankFilterState => ({
  paperSizes: [],
  colourModes: [],
  usageTypes: [],
  functionTypes: [],
  features: [],
});

const ecoTankSortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "SKU", value: "sku" },
];

const buildFeatureList = (features: string[]) => {
  if (features.length === 0) {
    return "low-cost everyday printing";
  }

  if (features.length === 1) {
    return features[0];
  }

  if (features.length === 2) {
    return `${features[0]} and ${features[1]}`;
  }

  return `${features.slice(0, -1).join(", ")}, and ${features.at(-1)}`;
};

const getEcoTankProductMeta = (product: EcoTankProduct): EcoTankProductMeta => {
  const source = `${product.name} ${product.productUrl}`.toLowerCase();

  const isMonochrome = source.includes("monochrome") || /\bm\d{4,5}\b/.test(source);
  const isA3Plus = source.includes("a3%2b") || source.includes("a3+");
  const isA3 = isA3Plus || source.includes("a3");
  const hasWifi = source.includes("wi-fi") || source.includes("wifi");
  const hasDuplex = source.includes("duplex");
  const hasAdf = source.includes("adf");
  const hasFax = source.includes("fax");
  const isSingleFunction = source.includes("single-function");

  const formatLabel = isA3Plus ? "A3+" : isA3 ? "A3" : "A4";
  const colourLabel = isMonochrome ? "Monochrome" : "Colour";
  const workflowLabel = isSingleFunction
    ? "Single Function"
    : hasFax || hasAdf || hasDuplex
      ? "Business Workflow"
      : "Multi-Function";

  const usageLabel =
    isA3 || hasAdf || hasFax || hasDuplex
      ? isMonochrome
        ? "High Volume Printing"
        : "Business Printing"
      : "Low Cost Printing";

  const highlights = [formatLabel, colourLabel, usageLabel, workflowLabel];

  const featureFragments = [
    hasWifi ? "Wi-Fi connectivity" : null,
    hasDuplex ? "duplex printing" : null,
    hasAdf ? "ADF support" : null,
    hasFax ? "fax support" : null,
  ].filter((value): value is string => Boolean(value));

  let description = `Reliable ${formatLabel} ${colourLabel.toLowerCase()} printer built for low-cost printing and everyday productivity.`;

  if (isSingleFunction && !isA3) {
    description = `Low-cost ${formatLabel} ${colourLabel.toLowerCase()} printer designed for everyday printing with high page yield and minimal running cost.`;
  } else if (isSingleFunction && isA3) {
    description = `Wide-format ${formatLabel} ${colourLabel.toLowerCase()} printer built for affordable everyday printing with larger output size and low running cost.`;
  } else if (isA3 && isMonochrome) {
    description = `Business-ready ${formatLabel} monochrome multi-function printer built for fast document workflows, high page yield, and dependable low-cost output.`;
  } else if (isA3) {
    description = `Wide-format ${formatLabel} colour multi-function printer designed for business documents, presentations, and low-cost high-volume printing.`;
  } else if (featureFragments.length > 0) {
    description = `${formatLabel} ${colourLabel.toLowerCase()} multi-function printer with ${buildFeatureList(featureFragments)} for efficient home and office printing.`;
  }

  let bestFor = "Home users and small offices looking for dependable low-cost printing.";

  if (isSingleFunction && !isA3) {
    bestFor = "Home users, small offices, and low-volume printing.";
  } else if (isSingleFunction && isA3) {
    bestFor = "Design studios, offices, and users who need affordable wide-format printing.";
  } else if (isA3 && isMonochrome) {
    bestFor = "Offices, billing teams, and document-heavy business printing.";
  } else if (isA3) {
    bestFor = "Businesses needing wide-format colour documents, reports, and presentations.";
  } else if (hasFax || hasAdf) {
    bestFor = "Small offices and growing teams with regular print, scan, copy, and document handling needs.";
  } else if (hasWifi || hasDuplex) {
    bestFor = "Home offices, students, and teams that need convenient everyday wireless printing.";
  }

  return {
    description,
    highlights,
    bestFor,
    inkUrl: `https://www.epson.co.in/i/${product.sku}`,
    paperSize: formatLabel,
    colourMode: colourLabel,
    usageType: usageLabel,
    functionType: workflowLabel,
    features: featureFragments,
    searchTerms: [
      product.name,
      product.sku,
      description,
      bestFor,
      formatLabel,
      colourLabel,
      usageLabel,
      workflowLabel,
      ...featureFragments,
    ],
  };
};

const ecoTankProducts = productCards.map((product) => ({
  ...product,
  meta: getEcoTankProductMeta(product),
}));

const EpsonEcoTank = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("recommended");
  const [selectedFilters, setSelectedFilters] = useState<EcoTankFilterState>(createEmptyEcoTankFilters);

  const toggleFilter = (group: keyof EcoTankFilterState, value: string) => {
    setSelectedFilters((current) => ({
      ...current,
      [group]: toggleFilterValue(current[group], value),
    }));
  };

  const clearFilters = () => {
    setSearchValue("");
    setSortValue("recommended");
    setSelectedFilters(createEmptyEcoTankFilters());
  };

  const filteredProducts = ecoTankProducts.filter((product) => {
    const { meta } = product;

    return (
      matchesSearchQuery(meta.searchTerms, searchValue) &&
      matchesSelectedOptions([meta.paperSize], selectedFilters.paperSizes) &&
      matchesSelectedOptions([meta.colourMode], selectedFilters.colourModes) &&
      matchesSelectedOptions([meta.usageType], selectedFilters.usageTypes) &&
      matchesSelectedOptions([meta.functionType], selectedFilters.functionTypes) &&
      matchesSelectedOptions(meta.features, selectedFilters.features)
    );
  });

  const sortedProducts =
    sortValue === "name-asc"
      ? [...filteredProducts].sort((left, right) => left.name.localeCompare(right.name))
      : sortValue === "name-desc"
        ? [...filteredProducts].sort((left, right) => right.name.localeCompare(left.name))
        : sortValue === "sku"
          ? [...filteredProducts].sort((left, right) => left.sku.localeCompare(right.sku))
          : filteredProducts;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Epson EcoTank Printers India | Product Finder by Zestek"
        description="Compare Epson EcoTank models with smart filters by paper size, output type, workflow, and features. Get pricing, consumables, and expert support."
        keywords={[
          "Epson EcoTank printers India",
          "EcoTank price in India",
          "A3 ink tank printer",
          "Epson printer dealer Mumbai",
          "low-cost color printer for office",
        ]}
        canonicalPath="/epson-ecotank"
        image="/zestek-logo.png"
      />
      <Header />

      <section
        className="relative overflow-hidden min-h-[360px] md:min-h-[420px] -mt-16"
        style={{
          backgroundImage: `url('${ecoTankBreadcrumbImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto section-padding pt-16 md:pt-20">
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
            Home / Epson EcoTank
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-navy">
            Epson EcoTank Printers
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-navy/80 md:text-base">
            Browse the full Epson EcoTank range with product filters, official details, and guided support from Zestek
            Digital LLP.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact#sales-inquiry" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
              Request a Quote
            </a>
            <a href="/" className="rounded-full border border-navy/30 px-5 py-2 text-xs font-semibold text-navy">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-6 md:pt-8">
        <div className="container mx-auto">
          <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ProductFilterPanel
              variant="sidebar"
              className="lg:top-28"
              eyebrow="EcoTank Smart Filters"
              title="Filter EcoTank by paper size, workflow, and core features"
              description="Search by model or SKU, then combine paper size, output type, workflow, and connectivity filters to narrow the shortlist quickly."
              totalCount={ecoTankProducts.length}
              resultCount={sortedProducts.length}
              searchPlaceholder="Search EcoTank model or SKU"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onClear={clearFilters}
              sortValue={sortValue}
              sortOptions={ecoTankSortOptions}
              onSortChange={setSortValue}
              groups={[
                {
                  id: "paper-size",
                  label: "Paper Size",
                  options: ["A4", "A3", "A3+"],
                  selected: selectedFilters.paperSizes,
                  onToggle: (value) => toggleFilter("paperSizes", value),
                },
                {
                  id: "colour-mode",
                  label: "Output Type",
                  options: ["Colour", "Monochrome"],
                  selected: selectedFilters.colourModes,
                  onToggle: (value) => toggleFilter("colourModes", value),
                },
                {
                  id: "usage-type",
                  label: "Usage",
                  options: ["Low Cost Printing", "Business Printing", "High Volume Printing"],
                  selected: selectedFilters.usageTypes,
                  onToggle: (value) => toggleFilter("usageTypes", value),
                },
                {
                  id: "function-type",
                  label: "Function Type",
                  options: ["Single Function", "Multi-Function", "Business Workflow"],
                  selected: selectedFilters.functionTypes,
                  onToggle: (value) => toggleFilter("functionTypes", value),
                },
                {
                  id: "features",
                  label: "Features",
                  options: ["Wi-Fi connectivity", "duplex printing", "ADF support", "fax support"],
                  selected: selectedFilters.features,
                  onToggle: (value) => toggleFilter("features", value),
                  helperText: "Choose one or more workflow features to narrow the models that fit your daily use.",
                },
              ]}
            />

            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Filtered Products</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-navy">{sortedProducts.length}</span> of{" "}
                    {ecoTankProducts.length}
                  </p>
                </div>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sortedProducts.map((product, index) => {
                    const { meta } = product;

                    return (
                        <motion.div
                          key={`${product.name}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03 }}
                          className="flex h-full flex-col rounded-2xl bg-card border border-border p-5 transition-all hover:border-highlight hover:shadow-lg"
                        >
                        <div className="h-40 rounded-xl bg-muted/60 border border-border mb-4 flex items-center justify-center overflow-hidden">
                          <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain p-3" />
                        </div>
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight">
                            EcoTank
                          </span>
                          <span className="text-xs text-muted-foreground">{product.sku}</span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-navy md:min-h-[3.75rem]">{product.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-3 md:min-h-[4.5rem]">{meta.description}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/80 md:mt-4 md:min-h-[2.5rem]">
                          {meta.highlights.join(" | ")}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:min-h-[3.25rem]">
                          <span className="font-semibold text-navy">Best for:</span> {meta.bestFor}
                        </p>

                          <div className="mt-auto space-y-2 pt-5">
                          <a
                            href={product.productUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-primary-foreground"
                          >
                            Check Price & Details
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                          <div className="grid grid-cols-1 gap-2 pt-1">
                            <a
                              href={salesPhoneHref}
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-xs font-semibold text-navy"
                            >
                              <PhoneCall className="h-4 w-4" />
                              <span>Call for Best Price</span>
                              <span className="text-navy/80">{salesPhoneNumber}</span>
                            </a>
                            <Link
                              to={serviceSupportContactUrl}
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-xs font-semibold text-navy"
                            >
                              <Wrench className="h-4 w-4" />
                              Service & Support
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-12 text-center">
                  <h3 className="font-display text-xl font-bold text-navy">No EcoTank models match these filters</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Try clearing one or two filters, or search with a broader model term.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpsonEcoTank;
