"use client";

import styled from "styled-components";
import Link from "next/link";
import { roadmapData, RoadmapItem } from '../lib/roadmapData';

// Note: Humaaans illustrations are used for timeline icons.
// Customize SVGs in Sketch/Figma with colors: coral (#FF6B6B), deep teal (#0A6C74).
// Source: Humaaans library (CC0, no attribution required) - https://www.humaaans.com

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

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 80vh;
  background: ${colors.background};

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    min-height: 50vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: ${colors.textSecondary};
  max-width: 800px;
  line-height: 1.6;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 320px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
`;

const ActionButton = styled(Link)`
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

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    width: 100%;
    max-width: 200px;
  }
`;

const HeroImage = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin-top: 2rem;

  @media (max-width: 768px) {
    max-width: 400px;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin-top: 1rem;
  }
`;

const JourneySection = styled.section`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const JourneyTitle = styled.h2`
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

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${colors.text};
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    &:before {
      left: 0.75rem;
    }
  }
`;

const TimelineItem = styled.div<{ $isEven: boolean }>`
  display: flex;
  width: 100%;
  max-width: 800px;
  flex-direction: ${({ $isEven }) => ($isEven ? 'row' : 'row-reverse')};
  align-items: center;
  gap: 1rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: ${colors.primary};
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    &:before {
      left: 0.75rem;
    }
  }
`;

const TimelineContent = styled(Link)`
  display: block;
  background: ${colors.background};
  padding: 1rem;
  border-radius: 4px;
  width: 45%;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease, transform 0.1s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 3rem;
  }
`;

const TimelineStage = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  line-height: 1.5;
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

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>LifeMap</HeroTitle>
        <JourneyTitle>Your Lifelong Guide</JourneyTitle>
        <HeroSubtitle>
          Imagine a companion that grows with you, from your first steps to your final reflections. LifeMap is a revolutionary platform that maps your entire life journey, anticipating challenges, celebrating victories, and guiding you toward a purposeful life.
        </HeroSubtitle>
        <ButtonContainer>
          <ActionButton href="/features">Features</ActionButton>
          <ActionButton href="/tech-stack">Tech Stack</ActionButton>
          <ActionButton href="/resources">Resources</ActionButton>
        </ButtonContainer>
        <HeroImage
          src="/HumanLifeCycle.png"
          alt="Human Life Cycle Illustration"
        />
      </HeroSection>
      <JourneySection>
        <JourneyTitle>Your Life Journey with LifeMap</JourneyTitle>
        <Timeline>
          {roadmapData.map((item: RoadmapItem, index: number) => (
            <TimelineItem key={item.ageGroup} $isEven={index % 2 === 0}>
              <TimelineContent href={item.subPage}>
                <TimelineStage>{item.title}</TimelineStage>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </JourneySection>
      <Footer>
        <FooterLink href="/about">About LifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/tech-stack">Tech Stack</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}