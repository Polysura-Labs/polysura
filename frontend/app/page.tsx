"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, LineChart, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1 mb-6">
            Polysura Labs
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            AI-Driven Web3 Startup Incubator: From Ideation to Success
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">Launch Platform</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Powered by AI Agents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Brain className="w-10 h-10 text-chart-1" />}
            title="AI Strategy"
            description="Intelligent business planning and strategy development tailored to your startup"
          />
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-chart-2" />}
            title="Blockchain Security"
            description="Built on Polygon for transparent and secure fund management"
          />
          <FeatureCard
            icon={<LineChart className="w-10 h-10 text-chart-3" />}
            title="Growth Analytics"
            description="Real-time metrics and AI-driven growth recommendations"
          />
          <FeatureCard
            icon={<Rocket className="w-10 h-10 text-chart-4" />}
            title="Launch Support"
            description="End-to-end support from ideation to market launch"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center bg-gradient-to-r from-card/50 to-accent/50 border-none">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Startup?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join the next generation of Web3-native startups powered by AI
          </p>
          <Button size="lg" className="bg-chart-1 hover:bg-chart-1/90">
            Get Started Now
          </Button>
        </Card>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}