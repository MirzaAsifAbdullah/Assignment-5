import TechnologyCard from './TechnologyCard';
import YourStack from './YourStack';

const TechnologyGrid = ({
  technologies,
  selectedStack,
  onAdd,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="technologies-heading">
        <div>
          <h2>Explore The <span >Technologies</span></h2>

          <p>
           Pick one technogy per catagory to build your ideal development stack. 
          </p>
        </div>
      </div>

      <div className="technologies-layout">

        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              selectedStack={selectedStack}
              onAdd={onAdd}
            />
          ))}
        </div>

       
        <YourStack
          selectedStack={selectedStack}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />

      </div>
    </section>
  );
};

export default TechnologyGrid;