import styles from "./trendData.module.scss";

const TrendData = () => {
  return (
    <div>
      <h1>매체현황</h1>
      <div className={styles.trendWrap}>
        <div className={styles.trendChart}>
          <span>차트가 들어갈 자리입니다.</span>
        </div>
        <div className={styles.trendDetailWrap}>
          <div className={styles.trendReportList}>
            <span className={styles.chartTitle}>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
          <div className={styles.snsReports}>
            <span className={styles.snsTitle}>페이스북</span>
            <span>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
          <div className={styles.snsReports}>
            <span className={styles.snsTitle}>네이버</span>
            <span>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
          <div className={styles.snsReports}>
            <span className={styles.snsTitle}>구글</span>
            <span>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
          <div className={styles.snsReports}>
            <span className={styles.snsTitle}>카톡</span>
            <span>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
          <div className={styles.totalReport}>
            <span className={styles.snsTitle}>총계</span>
            <span>광고비</span>
            <span>매출</span>
            <span>ROAS</span>
            <span>노출수</span>
            <span>클릭 수</span>
            <span>클릭률 (CTR)</span>
            <span>클릭당비용 (CPC)</span>
            <span>(CPA)</span>
            <span>DATE</span>
            <span>COST</span>
            <span>(CVR)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendData;
