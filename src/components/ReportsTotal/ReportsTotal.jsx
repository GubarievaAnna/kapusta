import PropTypes from 'prop-types';
import s from './ReportsTotal.module.css';
import { useTranslation } from 'react-i18next';

const ReportsTotal = ({ userExpenses, userIncome }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.block}>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.expenses}>{t('reports.expenses')}</p>
            <p className={s.expensesTotal}>
              -&nbsp;
              {userExpenses.expenseTotal
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
              &nbsp; {t('general.currencyName')}
            </p>
          </li>
          <li className={`${s.item} ${s.itemPseudoElement} `}>
            <p className={s.income}>{t('reports.income')}</p>
            <p className={s.incomeTotal}>
              +&nbsp;
              {userIncome.incomeTotal
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}
              &nbsp; {t('general.currencyName')}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

ReportsTotal.propTypes = {
  userExpenses: PropTypes.object.isRequired,
  userIncome: PropTypes.object.isRequired,
};

export default ReportsTotal;
