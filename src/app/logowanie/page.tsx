import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sekcja logowania */}
      <div className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-[#1E8449]">
            <h1 className="text-2xl font-bold text-[#1E8449] text-center mb-6">Logowanie</h1>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
                  placeholder="Wpisz swój email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Hasło</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E8449]"
                  placeholder="Wpisz swoje hasło"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E8449] hover:bg-[#166F3C] text-white py-2 rounded-md transition-colors"
              >
                Zaloguj się
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 