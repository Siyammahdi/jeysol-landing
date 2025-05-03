'use client';

import React from 'react';
import {
  Code,
  Globe,
  Smartphone,
  Layout,
  Cpu,
  Cloud,
  Lightbulb,
  Award,
  Users,
  Shield,
  Heart,
  RefreshCw,
  CheckCircle,
  ThumbsUp,
  Map,
  Calendar,
  Check,
  BarChart,
  Clock,
  Zap,
  Trophy,
  Smile,
  default as LucideIcon,
} from 'lucide-react';

export type IconName = 
  | 'code' 
  | 'globe' 
  | 'smartphone' 
  | 'layout' 
  | 'cpu' 
  | 'cloud'
  | 'lightbulb'
  | 'award'
  | 'users'
  | 'shield'
  | 'heart'
  | 'refresh-cw'
  | 'check-circle'
  | 'thumbs-up'
  | 'thumbsUp'
  | 'map'
  | 'calendar'
  | 'check'
  | 'barChart'
  | 'clock'
  | 'zap'
  | 'trophy'
  | 'smile'
  | 'default';

export const IconMap = {
  service: {
    code: Code,
    globe: Globe,
    smartphone: Smartphone,
    layout: Layout,
    cpu: Cpu,
    cloud: Cloud,
    default: Code
  },
  
  value: {
    lightbulb: Lightbulb,
    award: Award,
    users: Users,
    shield: Shield,
    heart: Heart,
    'refresh-cw': RefreshCw,
    default: Lightbulb
  },
  
  stats: {
    'check-circle': CheckCircle,
    check: Check,
    'thumbs-up': ThumbsUp,
    thumbsUp: ThumbsUp,
    map: Map,
    calendar: Calendar,
    barChart: BarChart,
    clock: Clock,
    zap: Zap,
    trophy: Trophy,
    smile: Smile,
    users: Users,
    default: BarChart
  }
}; 