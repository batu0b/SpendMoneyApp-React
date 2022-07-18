import React from "react";
import {moneyFormat} from "./helpers";
function Header({ money, total }) {
  return (
    <div>
        {total > 0 && money - total >0 && (
            <div>
                 <div>Harcamak için ${moneyFormat(money-total)} paranız kaldı</div>
            </div>
        )}

        {total=== 0 && (
            <div>
                 <div>Harcamak için ${moneyFormat(money)} paranız var</div>
            </div>
        )}

        {money-total === 0 && (
            <div>paranız bitti.</div>
        )}

    </div>
  );
}

export default Header;
