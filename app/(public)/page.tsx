"use client";

import React from "react";
import Hero3D from "@/components/sections/Hero3D";
import ServicesEditorial from "@/components/sections/ServicesEditorial";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import VehicleConfigurator3D from "@/components/sections/VehicleConfigurator3D";
import DetailingHorizontalScroll from "@/components/sections/DetailingHorizontalScroll";
import TimelineProcess from "@/components/sections/TimelineProcess";
import VehicleCareCockpit from "@/components/sections/VehicleCareCockpit";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />

      {/* 01. HERO */}
      <Hero3D />

      {/* 02. EDITORIAL SERVICES INDEX (All 15 Services) */}
      <ServicesEditorial />

      {/* 03. PPF SIGNATURE BEFORE/AFTER EXPERIENCE */}
      <BeforeAfterSlider />

      {/* 04. 3D / INTERACTIVE VEHICLE CONFIGURATOR */}
      <VehicleConfigurator3D />

      {/* 05. DETAILING MACRO SHOWCASE */}
      <DetailingHorizontalScroll />

      {/* 06. PROCESS: NC MASTER DENEYİMİ */}
      <TimelineProcess />

      {/* 07. VEHICLE CARE DIGITAL COCKPIT */}
      <VehicleCareCockpit />
    </>
  );
}
