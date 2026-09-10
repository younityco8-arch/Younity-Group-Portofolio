export type EventCategory = 'all' | 'property' | 'exhibition' | 'corporate' | 'campus';

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  eventTitle: string;
  category: EventCategory;
  tag: string;
  aspect?: string;
}

export interface PortfolioEvent {
  id: string;
  title: string;
  subtitle: string;
  category: EventCategory;
  categoryName: string;
  client: string;
  dateOrFrequency: string;
  location: string;
  highlightStats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  role: string;
  keyImpact: string;
  description: string;
  featuredImage: string;
  photos: GalleryPhoto[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  deliverables: string[];
  advantage: string;
  popularFor: string;
  badge?: string;
}

export interface EquipmentItem {
  name: string;
  category: string;
  description: string;
  specs: string;
  iconName: string;
}
