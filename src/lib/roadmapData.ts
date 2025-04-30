export interface RoadmapFeature {
    title: string;
    description: string;
  }
  
  export interface RoadmapItem {
    ageGroup: string;
    title: string;
    description: string;
    subPage: string;
    features: RoadmapFeature[];
  }
  
  export const roadmapData: RoadmapItem[] = [
    {
      ageGroup: 'child',
      title: 'Early Childhood (0-12 years)',
      description:
        'Guide parents and children through developmental milestones, goal setting, and memory creation. Track physical, cognitive, and emotional growth with gamified tools and secure memory storage.',
      subPage: '/roadmap/child',
      features: [
        {
          title: 'Developmental Milestones',
          description:
            'Track physical growth (height, weight, motor skills), cognitive milestones (language development, problem-solving), and emotional milestones (social skills, empathy) with visual charts and parent notifications.',
        },
        {
          title: 'Goal Setting',
          description:
            'Set short-term goals like learning to tie shoes or reading a book, using gamified badges and parent-guided templates for engagement.',
        },
        {
          title: 'Memories and Keepsakes',
          description:
            'Create digital scrapbooks with photos, videos, and captions, securely shared with family members via private links.',
        },
        {
          title: 'Parent Support',
          description:
            'Provide parenting tips tailored to age, community forums for advice, and family calendars for coordinating activities and appointments.',
        },
      ],
    },
    {
      ageGroup: 'teen',
      title: 'Adolescence (13-19 years)',
      description:
        'Empower teens to navigate academics, social relationships, and self-discovery with tools for goal setting, study planning, and mental well-being.',
      subPage: '/roadmap/teen',
      features: [
        {
          title: 'Education and Learning',
          description:
            'Track grades, set goals for exams (SAT, ACT), and manage study schedules with integrations like Google Classroom and time management tools.',
        },
        {
          title: 'Social Relationships',
          description:
            'Map friendships, offer private messaging with privacy controls, and provide conflict resolution tips for peer interactions.',
        },
        {
          title: 'Life Goals',
          description:
            'Set long-term goals with vision boards, personality assessments, and career exploration tools to guide future aspirations.',
        },
        {
          title: 'Well-being',
          description:
            'Track mood, fitness, and sleep with mindfulness exercises, mental health resources, and wearable integrations.',
        },
        {
          title: 'Self-Discovery',
          description:
            'Journal identity and interests with guided prompts, career aptitude tests, and hobby suggestions based on personality.',
        },
      ],
    },
    {
      ageGroup: 'youngAdult',
      title: 'Young Adulthood (20-30 years)',
      description:
        'Support young adults in building careers, managing finances, and exploring life with tools for professional growth, budgeting, and travel planning.',
      subPage: '/roadmap/young-adult',
      features: [
        {
          title: 'Career Exploration',
          description:
            'Build resumes, track job applications, and network with LinkedIn integration, plus access skill development resources.',
        },
        {
          title: 'Financial Planning',
          description:
            'Create budgets, set savings goals, and learn financial literacy with tools for loan calculators and side hustle suggestions.',
        },
        {
          title: 'Relationships',
          description:
            'Map long-term friendships and romantic relationships, manage roommate tasks, and build support networks.',
        },
        {
          title: 'Well-being',
          description:
            'Track fitness, nutrition, and mental health with wearable integrations, stress trackers, and wellness resources.',
        },
        {
          title: 'Travel',
          description:
            'Log adventures, create bucket lists, and plan trips with itineraries and cultural event suggestions.',
        },
      ],
    },
    {
      ageGroup: 'midlife',
      title: 'Midlife (30-45 years)',
      description:
        'Balance career, family, and personal growth with tools for parenting, stress management, and professional development.',
      subPage: '/roadmap/midlife',
      features: [
        {
          title: 'Career Growth',
          description:
            'Track milestones, set leadership goals, and access negotiation tips and industry trend resources.',
        },
        {
          title: 'Family and Parenting',
          description:
            'Manage family schedules, track children’s milestones, and access parenting resources with co-parenting tools.',
        },
        {
          title: 'Relationships',
          description:
            'Nurture connections with communication exercises, anniversary reminders, and therapy app integrations.',
        },
        {
          title: 'Well-being',
          description:
            'Monitor stress, fitness, and nutrition with family-oriented health plans and mindfulness tools.',
        },
        {
          title: 'Personal Growth',
          description:
            'Pursue hobbies, lifelong learning, and community involvement with goal trackers and resources.',
        },
      ],
    },
    {
      ageGroup: 'middleAge',
      title: 'Middle Age (45-60 years)',
      description:
        'Navigate career transitions, family changes, and health with tools for reflection, caregiving, and community engagement.',
      subPage: '/roadmap/middle-age',
      features: [
        {
          title: 'Career Transition',
          description:
            'Explore pivots, upskill with course recommendations, and mentor others with networking tools.',
        },
        {
          title: 'Family and Relationships',
          description:
            'Support adult children and aging parents with caregiving schedules and family reunion planners.',
        },
        {
          title: 'Well-being',
          description:
            'Track age-related health issues (e.g., menopause), cognitive function, and fitness with reminders.',
        },
        {
          title: 'Reflection',
          description:
            'Plan retirement, reflect on life with timelines, and start legacy planning with memory tools.',
        },
        {
          title: 'Community',
          description:
            'Join clubs, volunteer, and organize events with group creators and local event listings.',
        },
      ],
    },
    {
      ageGroup: 'senior',
      title: 'Older Adulthood (60+ years)',
      description:
        'Celebrate legacy, stay connected, and maintain well-being with tools for memoir creation, community involvement, and end-of-life planning.',
      subPage: '/roadmap/senior',
      features: [
        {
          title: 'Legacy',
          description:
            'Create memoirs, family trees, and oral histories, securely sharing stories with family.',
        },
        {
          title: 'Social Connections',
          description:
            'Join senior clubs, stay connected with video call integrations, and organize social events.',
        },
        {
          title: 'Well-being',
          description:
            'Track mobility, cognitive health, and medications with reminders and telehealth integrations.',
        },
        {
          title: 'Lifelong Learning',
          description:
            'Explore courses, book clubs, and tech tutorials for personal enrichment.',
        },
        {
          title: 'End-of-Life Planning',
          description:
            'Plan advance directives, funerals, and communicate wishes with trusted contacts.',
        },
      ],
    },
  ];