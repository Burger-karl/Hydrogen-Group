/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
 const candles = [4, 4, 1, 3]
function birthdayCakeCandles(candles) {
  candles.sort((a,b)=> a-b);
  const tallestCandle = candles[candles.length - 1];
  const tallestCandleArray = candles.filter((num => num === tallestCandle));
return (tallestCandleArray.length);

}

module.exports = birthdayCakeCandles;

