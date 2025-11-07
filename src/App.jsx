import Header from "./components/Header";
import Hero from "./components/Hero";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <ReviewForm />
        <ReviewList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
