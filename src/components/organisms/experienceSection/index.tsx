"use client"
import { ExperienceItem } from "@/components/molecules/experienceItem"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/atoms/animatedText"

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <AnimatedText
            text="My Work Experience"
            highlightedWord="Work Experience"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          />
        </motion.div>

        <div className="space-y-16">
          <ExperienceItem
            company="SecureCloud Technologies"
            location="Remote"
            period="Jul 2023 - Present"
            position="Cloud Security Engineer"
            description="Designed and implemented cloud security frameworks across AWS and Azure environments. Automated security compliance checks using Terraform and AWS Config, reducing misconfigurations by 50%. Led incident response drills improving threat detection and mitigation."
            isOrange={true}
            index={0}
          />

          <ExperienceItem
            company="NextGen DevSecOps"
            location="San Francisco, CA"
            period="Mar 2021 - Jun 2023"
            position="DevSecOps Specialist"
            description="Built secure CI/CD pipelines integrating static code analysis, vulnerability scanning, and automated compliance audits. Implemented container security with Kubernetes and Docker, reducing security risks by 30%. Collaborated with developers to embed security best practices early in the development lifecycle."
            index={1}
          />

          <ExperienceItem
            company="CyberSafe Solutions"
            location="London, UK"
            period="Jan 2019 - Feb 2021"
            position="Security Analyst"
            description="Monitored cloud environments for threats using AWS GuardDuty and Azure Security Center. Conducted regular penetration testing and vulnerability assessments. Developed security training programs for engineering teams, boosting security awareness and reducing incidents."
            isOrange={true}
            index={2}
          />
        </div>
      </div>
    </section>
  )
}
