import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const filters = [
  "Home & Office",
  "Business",
  "Photo",
  "A3 / A4",
  "Wi-Fi",
  "Duplex",
  "ADF",
  "EcoTank",
  "WorkForce",
];

const productCards = [
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
  {
    name: "EcoTank L15180",
    sku: "C11CH71507",
    productUrl:
      "https://www.epson.co.in/EcoTank-Printers/Epson-EcoTank-L15180-A3-Wi-Fi-Duplex-Multi-Function-Ink-Tank-Printer/p/C11CH71507",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=971336a3289c5e62e48bb05c1de8c49e05cea44d&vid=971336a3289c5e62e48bb05c1de8c49e05cea44d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=L15150_19Cah_FDL_Black_01_2",
  },
];

const EpsonEcoTank = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section
      className="relative overflow-hidden min-h-[360px] md:min-h-[420px] -mt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 25, 60, 0.78), rgba(10, 25, 60, 0.78)), url('https://zestek.vercel.app/assets/images/products/epson-l3252.png')",
        backgroundSize: "auto 84%",
        backgroundPosition: "92% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto section-padding pt-16 md:pt-20">
        <span className="mt-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
          Product Finder
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground">
          Epson EcoTank Printers
        </h1>
        <p className="mt-3 text-sm md:text-base text-primary-foreground/80 max-w-3xl">
          Browse the full Epson EcoTank range with product filters, official details, and guided support from Zestek
          Digital LLP.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
            Request a Quote
          </a>
          <a href="/" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white">
            Back to Home
          </a>
        </div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-navy mb-3">
                <Search className="w-4 h-4" />
                Search
              </div>
              <input
                placeholder="Search printers..."
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-navy mb-3">
                <SlidersHorizontal className="w-4 h-4" />
                Find the Right EcoTank
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Select based on print volume, features, connectivity, and paper size to quickly shortlist the best
                EcoTank models for your business or daily use.
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>Home + office Entry models to higher-duty EcoTank printers in one view.</p>
                <p>A4 + A3 Choose by paper format first, then compare features and price.</p>
                <p>Colour + mono Pick the right fit for daily print volume and running cost.</p>
              </div>
              <div className="space-y-2">
                {filters.map((f) => (
                  <label key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="accent-navy" />
                    {f}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6">
              <h2 className="section-title text-2xl md:text-3xl">
                Epson EcoTank Printers for Low-Cost Printing
              </h2>
              <p className="section-subtitle mt-2">
                Explore EcoTank printers designed for low running cost and everyday reliability - ideal for home, office,
                and small businesses. Easily find the right model based on your print volume, paper size, and usage needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCards.map((p, i) => (
                <motion.div
                  key={`${p.name}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-card border border-border p-5 hover:shadow-lg hover:border-highlight transition-all"
                >
                  <div className="h-36 rounded-xl bg-muted/60 border border-border mb-4 flex items-center justify-center overflow-hidden">
                    <img src={p.imageUrl} alt={p.name} className="h-full w-full object-contain p-3" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight">
                      EcoTank
                    </span>
                    <span className="text-xs text-muted-foreground">{p.sku}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy">{p.name}</h3>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/contact"
                      className="flex-1 rounded-full bg-navy text-primary-foreground py-2 text-xs font-semibold text-center"
                    >
                      Quick Enquiry
                    </Link>
                    <a
                      href={p.productUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full border border-border py-2 text-xs font-semibold text-navy text-center"
                    >
                      View Details
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EpsonEcoTank;
