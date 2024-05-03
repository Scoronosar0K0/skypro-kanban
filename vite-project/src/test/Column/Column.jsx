/* eslint-disable react/prop-types */
function Column({ ColumnTitle }) {
  return (
    <>
      <div className="column__title">
        <p>{ColumnTitle || "column title"}</p>
      </div>
    </>
  );
}
export default Column;
