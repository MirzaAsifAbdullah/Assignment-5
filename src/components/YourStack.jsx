import technologyIcons from './technologyIcons';

const YourStack = ({ selectedStack, onRemove, onRemoveAll }) => {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>{selectedStack.length} technologies selected</p>
        </div>

        {selectedStack.length > 0 && (
          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {selectedStack.length === 0 ? (
        <div className="stack-empty">
          <div className="empty-icon">+</div>
          <h3>No technologies selected yet.</h3>
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-list">
          {selectedStack.map((technology) => {
            const icon = technologyIcons[technology.icon];

            return (
              <div
                className="stack-item transition-all duration-200 hover:shadow-sm"
                key={technology.id}
              >
                <div className="stack-item-icon">
                  <img
                    src={icon}
                    alt={technology.name}
                  />
                </div>

                <div className="stack-item-info">
                  <h3>{technology.name}</h3>
                  <span>{technology.category}</span>
                </div>

                <button
                  className="remove-stack-btn transition-all duration-200 hover:scale-110"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default YourStack;