import technologyIcons from './technologyIcons';

const TechnologyCard = ({
  technology,
  selectedStack,
  onAdd,
}) => {
  const icon = technologyIcons[technology.icon];

  const isAdded = selectedStack.some(
    (item) => item.id === technology.id
  );

  return (
    <article className="technology-card">

      <div className="technology-card-top">
        <div className="technology-icon">
          <img
            src={icon}
            alt={technology.name}
          />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="technology-card-bottom">

        <span className="rating">
          <span className="star">★</span>
          {technology.rating}
        </span>

        {/* Add to Stack Button */}
        <button
          className={`add-stack-btn transition-all duration-200 ${
            isAdded
              ? 'added opacity-70 cursor-not-allowed'
              : 'hover:-translate-y-0.5 hover:shadow-md'
          }`}
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded
            ? '✓ Added to Stack'
            : 'Add to Stack'}
        </button>

      </div>

    </article>
  );
};

export default TechnologyCard;