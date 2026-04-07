import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoiCalculatorContent from "@/components/RoiCalculatorContent";
import PageMeta from "@/components/PageMeta";

const RoiCalculator = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Printer ROI Calculator | Estimate Savings Before You Invest"
      description="Use Zestek's print ROI calculator to compare monthly print costs, projected savings, payback, and recommended printer fit based on your workload."
      keywords={[
        "printer ROI calculator",
        "print cost calculator India",
        "business printer savings estimator",
        "Epson Konica ROI tool",
        "managed print ROI",
      ]}
      canonicalPath="/roi-calculator"
      image="/zestek-logo.png"
    />
    <Header />
    <RoiCalculatorContent />
    <Footer />
  </div>
);

export default RoiCalculator;
