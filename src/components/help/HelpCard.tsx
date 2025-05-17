
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HelpCardProps {
  title: string;
  icon: LucideIcon;
  path: string;
}

const HelpCard: React.FC<HelpCardProps> = ({ title, icon: Icon, path }) => {
  return (
    <Link to={path} className="help-card group">
      <div className="help-card-icon">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium text-center">{title}</h3>
      <div className="text-sm text-fyaril-blue font-medium mt-2 group-hover:underline">
        Learn more
      </div>
    </Link>
  );
};

export default HelpCard;
