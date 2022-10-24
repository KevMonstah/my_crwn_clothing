import './category-item.styles.scss'

const CategoryItem = ({ category }) => {

    const { imageUrl, title } = category;

    return (
        <div className="category-container">
        {/* can add CSS to a react obj by using the 'style' keyword */}
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop NOW</p>
        </div>
      </div>

    );
}

export default CategoryItem;
