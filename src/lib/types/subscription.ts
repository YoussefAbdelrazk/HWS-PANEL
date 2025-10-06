export interface SubscriptionFeature {
  text: string;
  isIncluded: boolean;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  features: SubscriptionFeature[];
  buttonText: string;
  buttonColor: string;
  iconColor: string;
  isPopular?: boolean;
}

export interface SubscriptionData {
  plans: SubscriptionPlan[];
  hero: {
    title: string;
    subtitle: string;
    benefits: {
      icon: string;
      text: string;
    }[];
  };
  notification?: {
    title: string;
    description: string;
    paymentDate: string;
  };
}
