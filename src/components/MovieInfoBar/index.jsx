import PropTypes from "prop-types";
// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className="stats-column">
          <p>Running Time: {calcTime(time)}</p>
        </div>
        <div className="stats-column">
          <p>Budget: {convertMoney(budget)}</p>
        </div>
        <div className="stats-column">
          <p>Revenue: {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
