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

const FeatureSection = styled.section`
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

const FeatureCard = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
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

export default function FeaturesPage() {
  return (
    <PageContainer>
      <MainContent>
        <Heading>LifeMap Features</Heading>
        <Description>
          LifeMap’s technical features are designed to seamlessly integrate into your life, providing tools that evolve with you through every stage. From tracking time to fostering connections, our platform empowers you to navigate your journey with confidence.
        </Description>
        <FeatureSection>
          <FeatureCard>
            <FeatureTitle>Time Tracker</FeatureTitle>
            <FeatureDescription>
              Our Time Tracker follows you through life, adapting to your age and life stage. By analyzing inputs like age, goals, and activities, it logs time spent on priorities (e.g., education, career, family) and suggests optimizations to balance your life. For example, a teenager receives study tips, while a retiree gets volunteering suggestions.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>AI-Driven Pain Point Detection</FeatureTitle>
            <FeatureDescription>
              Using machine learning, LifeMap identifies recurring challenges (e.g., stress, financial strain) based on user inputs and patterns. It offers tailored resources, such as mindfulness exercises for stress or budgeting tools for debt, ensuring proactive support at every stage.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Milestone Logging</FeatureTitle>
            <FeatureDescription>
              Capture and celebrate life’s moments, from graduations to promotions. The platform creates a dynamic timeline, allowing users to reflect on achievements and share select milestones with loved ones, fostering a sense of progress and purpose.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Community Integration</FeatureTitle>
            <FeatureDescription>
              Connect with others at similar life stages through private or public communities. Share experiences, seek advice, or join groups (e.g., new parents, retirees) to build meaningful relationships and combat isolation across all ages.
            </FeatureDescription>
          </FeatureCard>
        </FeatureSection>
      </MainContent>
      <Footer>
        <FooterLink href="/about">About LifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/tech-stack">Tech Stack</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}