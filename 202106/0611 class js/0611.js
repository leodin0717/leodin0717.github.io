//   1.사용자로부터 '입력' - 출생연도
      // 2. 나이계산 -> 현재년도 - 출생년도 +1
      // 3. '출력' -> 나이를 입력
      function cal(){
      let born = prompt('출생연도를 입력하세요');
      const currentYear = 2021;
      let current = prompt('현재년도를 입력하세요');
      let age = currentYear - born +1;
      document.write(`당신의 나이는 ${age}입니다`);
      }
