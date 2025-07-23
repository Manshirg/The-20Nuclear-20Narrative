import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Timeline from "./pages/Timeline";
import PerceptionShifts from "./pages/PerceptionShifts";
import GovernmentVsPublic from "./pages/GovernmentVsPublic";
import Sources from "./pages/Sources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route
                  path="/perception-shifts"
                  element={<PerceptionShifts />}
                />
                <Route
                  path="/government-vs-public"
                  element={<GovernmentVsPublic />}
                />
                <Route path="/sources" element={<Sources />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
