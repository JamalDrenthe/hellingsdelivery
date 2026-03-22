export type ProductType = 'physical' | 'digital' | 'bundle';
export type BillingInterval = 'month' | 'quarter' | 'year';
export type SubscriptionStatus = 'active' | 'paused' | 'canceled' | 'past_due';
export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface BillingAddress {
  street: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  billing_address: BillingAddress | null;
  vat_number: string | null;
  kvk_number: string | null;
  bank_account: string | null;
  preferred_payment_method: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  type: ProductType;
  price: number;
  vat_rate: number;
  stripe_price_id: string | null;
  is_active: boolean;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string | null;
  billing_interval: BillingInterval;
  price: number;
  stripe_price_id: string | null;
  features: string[] | null;
  is_active: boolean;
}

export interface CustomerSubscription {
  id: string;
  customer_id: string;
  plan_id: string;
  status: SubscriptionStatus;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  payment_provider: string | null;
  provider_subscription_id: string | null;
  created_at: string;
  subscription_plans?: SubscriptionPlan;
}

export interface Order {
  id: string;
  customer_id: string | null;
  status: OrderStatus;
  total_amount: number;
  payment_method: string | null;
  payment_provider: string | null;
  provider_payment_id: string | null;
  stripe_session_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  subscription_plan_id: string | null;
  quantity: number;
  unit_price: number;
  total_price: number;
  products?: Product;
  subscription_plans?: SubscriptionPlan;
}
