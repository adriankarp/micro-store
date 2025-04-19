import React from "react";

import { Card, CardContent } from "@micro-store/ui/components/card";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Loading() {
  return (
    <div className="bg-muted flex min-h-screen items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Header />
        <Card className="overflow-hidden">
          <CardContent className="p-0 md:grid md:grid-cols-2 md:items-center h-full min-h-[600px]">
            <div className="p-6 md:p-8 h-full flex flex-col justify-center space-y-6 animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-3/4 mx-auto" />

              <div className="space-y-4">
                <div className="h-10 bg-slate-200 rounded w-full" />
                <div className="h-10 bg-slate-200 rounded w-full" />
                <div className="h-10 bg-slate-200 rounded w-full" />
              </div>

              <div className="h-10 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-10 bg-slate-200 rounded w-full" />
            </div>

            <div className="hidden md:block animate-pulse">
              <div className="w-full h-96 bg-slate-200" />
            </div>
          </CardContent>
        </Card>
        <Footer />
      </div>
    </div>
  );
}
