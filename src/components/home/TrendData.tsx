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
            <p className={styles.faceBookTitle}>페이스북</p>
            <p>광고비</p>
            <p>매출</p>
            <p>ROAS</p>
            <p>노출수</p>
            <p>클릭 수</p>
            <p>클릭률 (CTR)</p>
            <p>클릭당비용 (CPC)</p>
            <p>(CPA)</p>
            <p>DATE</p>
            <p>COST</p>
            <p>(CVR)</p>
          </div>
          <div className={styles.snsReports}>
            <p className={styles.naverTitle}>네이버</p>
            <p>광고비</p>
            <p>매출</p>
            <p>ROAS</p>
            <p>노출수</p>
            <p>클릭 수</p>
            <p>클릭률 (CTR)</p>
            <p>클릭당비용 (CPC)</p>
            <p>(CPA)</p>
            <p>DATE</p>
            <p>COST</p>
            <p>(CVR)</p>
          </div>
          <div className={styles.snsReports}>
            <p className={styles.snsTitle}>구글</p>
            <p>광고비</p>
            <p>매출</p>
            <p>ROAS</p>
            <p>노출수</p>
            <p>클릭 수</p>
            <p>클릭률 (CTR)</p>
            <p>클릭당비용 (CPC)</p>
            <p>(CPA)</p>
            <p>DATE</p>
            <p>COST</p>
            <p>(CVR)</p>
          </div>
          <div className={styles.snsReports}>
            <p className={styles.snsTitle}>카톡</p>
            <p>광고비</p>
            <p>매출</p>
            <p>ROAS</p>
            <p>노출수</p>
            <p>클릭 수</p>
            <p>클릭률 (CTR)</p>
            <p>클릭당비용 (CPC)</p>
            <p>(CPA)</p>
            <p>DATE</p>
            <p>COST</p>
            <p>(CVR)</p>
          </div>
          <div className={styles.totalReport}>
            <p className={styles.snsTitle}>총계</p>
            <p>광고비</p>
            <p>매출</p>
            <p>ROAS</p>
            <p>노출수</p>
            <p>클릭 수</p>
            <p>클릭률 (CTR)</p>
            <p>클릭당비용 (CPC)</p>
            <p>(CPA)</p>
            <p>DATE</p>
            <p>COST</p>
            <p>(CVR)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendData;
