"use client";

import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { roadmapData, RoadmapItem, RoadmapFeature } from '../../../lib/roadmapData';

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
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
  background: ${colors.background};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
    gap: 0.75rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const FeatureSection = styled.section`
  background: ${colors.background};
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const FeatureItem = styled.div`
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  background: ${colors.background};
  color: ${colors.text};
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, transform 0.1s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
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

// Sub-Page Component
export default function AgeGroupRoadmap() {
  const { ageGroup } = useParams();
  // Normalize ageGroup to camelCase (e.g., young-adult -> youngAdult)
  const normalizedAgeGroup = typeof ageGroup === 'string' ? ageGroup.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) : ageGroup;
  
  // Debug: Log ageGroup and normalizedAgeGroup
  console.log('ageGroup:', ageGroup, 'normalizedAgeGroup:', normalizedAgeGroup);

  const data = roadmapData.find((item: RoadmapItem) => item.ageGroup === normalizedAgeGroup);

  if (!data) {
    console.error(`No data found for ageGroup: ${normalizedAgeGroup}`);
    return (
      <PageContainer>
        <MainContent>
          <Title>Age group not found</Title>
          <BackButton href="/">Back to Home</BackButton>
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

  return (
    <PageContainer>
      <MainContent>
        <BackButton href="/">Back to Home</BackButton>
        <Title>{data.title} Roadmap</Title>
        <FeatureSection>
          {data.features.map((feature: RoadmapFeature) => (
            <FeatureItem key={feature.title}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))}
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