const flavors = [
  {
    id: 'flavor-matcha',
    name: 'Matcha',
    image: '/flavor_matcha_1779851994305.png',
    alt: 'Matcha green tea ice cream cones',
    desc: 'The Ice Treat Has The Sweetness Of Honey And The Green Of Orange Combined With The Earthy Mix That Is So Refreshing.',
    bgColor: '#e8f5e9',
    nameColor: '#2e7d32',
  },
  {
    id: 'flavor-strawberry',
    name: 'Strawberry',
    image: '/flavor_strawberry_1779852011603.png',
    alt: 'Fresh strawberry ice cream with real strawberry',
    desc: 'The Main Ingredient Is Pureed Fresh Strawberries, So It Is Not The Same As Other Strawberry-Flavored Mix...',
    bgColor: '#fce4ec',
    nameColor: '#c2185b',
  },
  {
    id: 'flavor-orange',
    name: 'Orange',
    image: '/flavor_orange_1779852032689.png',
    alt: 'Vibrant orange sorbet with orange slice',
    desc: 'The Ice Treats Has The Sweet Taste Of Honey And The Cream Of Orange Combined With The Zesty Mix That Is...',
    bgColor: '#fff3e0',
    nameColor: '#e65100',
  },
  {
    id: 'flavor-chocolate',
    name: 'Chocolate',
    image: '/flavor_chocolate_1779852046951.png',
    alt: 'Rich dark chocolate ice cream with shavings',
    desc: 'Each Piece Of Melted Chocolate Stands With The Finest Milk Butter To Create Surprisingly Rich Flavor...',
    bgColor: '#fbe9e7',
    nameColor: '#4e342e',
  },
];

const FlavorsSection = () => {
  return (
    <section className="flavors-section" id="flavors" aria-label="Ice cream flavors">
      <div className="container">


        <div className="flavors-grid">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="flavor-card"
              id={flavor.id}
              role="button"
              tabIndex={0}
              aria-label={`${flavor.name} flavor - learn more`}
              style={{ backgroundColor: flavor.bgColor }}
            >
              <div className="flavor-image-wrap">
                <img src={flavor.image} alt={flavor.alt} loading="lazy" />
              </div>
              <h3 className="flavor-name" style={{ color: flavor.nameColor }}>{flavor.name}</h3>
              <p className="flavor-desc">{flavor.desc}</p>
              <div className="flavor-btn" aria-label={`View ${flavor.name} details`}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
