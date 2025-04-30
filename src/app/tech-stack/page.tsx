"use client";

import styled from "styled-components";

// Colors
const colors = {
  primary: '#FF6B6B', // Coral
  secondary: '#0A6C74', // Deep teal
  background: '#FFFFFF', // White
  text: '#000000', // Black
  textSecondary: '#4A4A4A', // Gray
  border: '#E0E0E0', // Light gray border
  hover: '#F5F5F5', // Light gray hover
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${colors.background};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 4rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: ${colors.textSecondary};
  max-width: 800px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 320px;
  }
`;

const TechSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TechCard = styled.div`
  background: ${colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
`;

const TechTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.75rem;
`;

const TechDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const AdditionalInfo = styled.section`
  width: 100%;
  margin: 3rem 0;
  text-align: left;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
`;

const InfoSubtitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  background: ${colors.background};
  border-top: 1px solid ${colors.border};
  color: ${colors.textSecondary};
  margin-top: auto;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${colors.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }
`;

export default function TechStackPage() {
  return (
    <PageContainer>
      <MainContent>
        <Heading>LifeMap’s Technical Foundation</Heading>
        <Description>
          LifeMap is built on a robust, scalable, and innovative tech stack designed to support millions of users worldwide. Our technology ensures a seamless, secure, and personalized experience for navigating life’s journey.
        </Description>
        <TechSection>
          <TechCard>
            <TechTitle>Frontend: Next.js & React Native</TechTitle>
            <TechDescription>
              Next.js delivers a fast, SEO-optimized web app with server-side rendering, while React Native powers a cross-platform mobile app for iOS and Android, ensuring a consistent and responsive user experience across devices.
            </TechDescription>
          </TechCard>
          <TechCard>
            <TechTitle>Backend: Firebase</TechTitle>
            <TechDescription>
              Firebase offers a real-time database, secure authentication, and cloud functions, enabling efficient data management, user syncing, and rapid feature deployment with minimal latency.
            </TechDescription>
          </TechCard>
          <TechCard>
            <TechTitle>AI/ML: Personalized Insights</TechTitle>
            <TechDescription>
              Advanced machine learning models analyze user data to provide tailored recommendations, predict pain points, and suggest resources. Hosted on cloud platforms, our AI scales to meet growing demand.
            </TechDescription>
          </TechCard>
          <TechCard>
            <TechTitle>Cloud: AWS</TechTitle>
            <TechDescription>
              AWS ensures global scalability, high availability, and low-latency performance. Services like EC2, S3, and Lambda support data storage, analytics, and AI workloads, enabling LifeMap to grow seamlessly.
            </TechDescription>
          </TechCard>
        </TechSection>
        <AdditionalInfo>
          <InfoTitle>Technical Advantages</InfoTitle>
          <InfoItem>
            <InfoSubtitle>Data Privacy & Security</InfoSubtitle>
            <InfoDescription>
              We prioritize user trust with end-to-end encryption, GDPR compliance, and granular data-sharing controls. Users can opt for offline storage, and anonymized data powers our analytics without compromising privacy.
            </InfoDescription>
          </InfoItem>
          <InfoItem>
            <InfoSubtitle>Third-Party Integrations</InfoSubtitle>
            <InfoDescription>
              LifeMap syncs with fitness trackers (e.g., Fitbit), calendars (e.g., Google Calendar), and educational platforms (e.g., Coursera) to streamline data input and enhance user journeys with real-time insights.
            </InfoDescription>
          </InfoItem>
          <InfoItem>
            <InfoSubtitle>Development Roadmap</InfoSubtitle>
            <InfoDescription>
              Phase 1 (Q1 2026): Launch MVP with timeline and time tracker. Phase 2 (Q3 2026): Integrate AI insights and community features. Phase 3 (2027): Expand globally with multilingual support and advanced integrations.
            </InfoDescription>
          </InfoItem>
          <InfoItem>
            <InfoSubtitle>Scalability & Cost-Efficiency</InfoSubtitle>
            <InfoDescription>
              Our cloud-based architecture minimizes operational costs while supporting millions of users. AWS’s pay-as-you-go model and Firebase’s serverless functions ensure cost-efficient scaling as LifeMap grows.
            </InfoDescription>
          </InfoItem>
        </AdditionalInfo>
      </MainContent>
      <Footer>
        <FooterLink href="/about">About LifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/resources">Resources</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}