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

const ResourceSection = styled.section`
  width: 100%;
  margin: 3rem 0;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ResourceCard = styled.div`
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

const ResourceTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ResourceButton = styled.a`
  display: inline-block;
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
    text-align: center;
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

export default function ResourcesPage() {
  const resources = [
    {
      title: "Altinn",
      description:
        "Altinn is Norway’s digital portal for businesses and individuals to submit forms, access services, and communicate with public authorities. It integrates with the Tax Administration and Brønnøysund Register Centre for seamless reporting. Ideal for managing business tasks or personal submissions like tax forms.",
      url: "https://www.altinn.no",
    },
    {
      title: "Skatteetaten",
      description:
        "The Norwegian Tax Administration (Skatteetaten) provides services for managing taxes, including tax returns, deduction cards, and marriage certificates. Access your personal tax information via My Page or contact them for support with payments and refunds.",
      url: "https://www.skatteetaten.no",
    },
    {
      title: "Utdanning.no",
      description:
        "Utdanning.no is a comprehensive resource for education and career planning in Norway. Explore study programs, vocational training, and career paths to make informed decisions about your future.",
      url: "https://www.utdanning.no",
    },
    {
      title: "NAV",
      description:
        "NAV (Norwegian Labour and Welfare Administration) offers support for employment, social services, and benefits. Access resources for job seekers, parental leave, pensions, and social assistance programs tailored to your needs.",
      url: "https://www.nav.no",
    },
    {
      title: "Helsenorge",
      description:
        "Helsenorge is the official health portal for Norwegian residents, providing access to medical records, appointments, and health information. Manage prescriptions, vaccinations, and telehealth services securely online.",
      url: "https://www.helsenorge.no",
    },
    {
      title: "Brønnøysundregistrene",
      description:
        "The Brønnøysund Register Centre manages business registrations, company data, and public records. Use it to start a business, update company information, or access legal registries like the Register of Business Enterprises.",
      url: "https://www.brreg.no",
    },
    {
      title: "Lånekassen",
      description:
        "Lånekassen provides student loans and grants for Norwegian students pursuing higher education or vocational training. Apply for funding, manage repayments, or explore eligibility for educational support.",
      url: "https://www.lanekassen.no",
    },
    {
      title: "Politi.no",
      description:
        "The Norwegian Police Service (Politi.no) offers services like passport applications, residence permits, and criminal record checks. Access information on immigration, safety, and legal processes for citizens and residents.",
      url: "https://www.politi.no",
    },
    {
      title: "Norge.no",
      description:
        "Norge.no is a central portal connecting citizens to public services across Norway. Find government contacts, digital mailboxes, and resources for everything from taxes to family services in one place.",
      url: "https://www.norge.no",
    },
    {
      title: "Studieforbund",
      description:
        "Studieforbund supports adult education and lifelong learning through courses and training programs. Explore opportunities for personal development, professional skills, or cultural activities in your community.",
      url: "https://www.studieforbund.no",
    },
  ];

  return (
    <PageContainer>
      <MainContent>
        <Heading>Resources for Norwegian Citizens</Heading>
        <Description>
          lifeMap connects you to essential Norwegian government and public services to support your journey through life. Explore trusted resources for taxes, education, health, and more, all in one place.
        </Description>
        <ResourceSection>
          <ResourceGrid>
            {resources.map((resource) => (
              <ResourceCard key={resource.title}>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <ResourceButton href={resource.url} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </ResourceButton>
              </ResourceCard>
            ))}
          </ResourceGrid>
        </ResourceSection>
      </MainContent>
      <Footer>
        <FooterLink href="/about">About lifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/resources">Resources</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}