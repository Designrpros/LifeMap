"use client";

import styled from "styled-components";
import Link from "next/link";

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

const Section = styled.section`
  width: 100%;
  margin: 3rem 0;
  text-align: left;
`;

const SectionTitle = styled.h2`
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

const SectionContent = styled.div`
  background: ${colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamCard = styled.div`
  background: ${colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
`;

const TeamName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const CTASection = styled.section`
  margin-top: 3rem;
  text-align: center;
`;

const CTAButton = styled(Link)`
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

export default function AboutPage() {
  return (
    <PageContainer>
      <MainContent>
        <Heading>About lifeMap</Heading>
        <Description>
          lifeMap is your lifelong companion, designed to guide you through every stage of life with personalized tools, insights, and community support. Our mission is to empower individuals to live purposefully, navigate challenges, and celebrate milestones.
        </Description>
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            <SectionText>
              At lifeMap, we believe life is a journey best navigated with intention and support. Our mission is to provide a platform that adapts to your unique needs, from childhood to older adulthood, offering tools for goal setting, time tracking, and personal growth. We aim to make life’s complexities manageable and its joys memorable.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Our Vision</SectionTitle>
          <SectionContent>
            <SectionText>
              We envision a world where everyone has a trusted companion to guide them through life’s transitions. By leveraging cutting-edge technology like AI-driven insights and seamless integrations, lifeMap strives to be the ultimate platform for personal development, connecting users with resources and communities that inspire growth and connection.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Our Team</SectionTitle>
          <TeamGrid>
            <TeamCard>
              <TeamName>Jane Doe</TeamName>
              <TeamRole>Founder & CEO</TeamRole>
              <SectionText>
                Jane is passionate about using technology to empower individuals. With a background in product design, she leads lifeMap’s vision to create a meaningful user experience.
              </SectionText>
            </TeamCard>
            <TeamCard>
              <TeamName>John Smith</TeamName>
              <TeamRole>CTO</TeamRole>
              <SectionText>
                John drives lifeMap’s technical innovation, ensuring scalability and security. His expertise in cloud architecture and AI shapes our robust platform.
              </SectionText>
            </TeamCard>
            <TeamCard>
              <TeamName>Emily Chen</TeamName>
              <TeamRole>Head of Community</TeamRole>
              <SectionText>
                Emily fosters lifeMap’s vibrant communities, connecting users across life stages. Her background in psychology informs our user-centric approach.
              </SectionText>
            </TeamCard>
          </TeamGrid>
        </Section>
      </MainContent>
      <Footer>
        <FooterLink href="/about">About lifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/tech-stack">Tech Stack</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}