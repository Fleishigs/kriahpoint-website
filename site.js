const trigger = document.querySelector('#try-cue');
if (trigger) {
  let interval;
  trigger.addEventListener('click', () => {
    clearInterval(interval);
    let seconds = 53;
    trigger.disabled = true;
    const card = document.querySelector('#reading-demo');
    const update = () => {
      document.querySelector('#clock').textContent = `0:${seconds}`;
      card.classList.toggle('amber', seconds >= 55 && seconds < 60);
      card.classList.toggle('mint', seconds >= 60);
      document.querySelector('#clock-label').textContent =
        seconds >= 60
          ? 'One minute reached'
          : seconds >= 55
            ? `${60 - seconds} seconds left`
            : 'Reading time';
      document.querySelector('#cue').textContent =
        seconds >= 60
          ? 'Tap Mark 1-minute word, then the word reached at the minute.'
          : seconds >= 55
            ? 'The whole reading page turns amber: one minute is almost here.'
            : 'The timer stays beside the reading sheet.';
      if (seconds >= 60) {
        document.querySelector('#clock').textContent = '1:00';
        trigger.disabled = false;
        trigger.textContent = 'Replay the minute cue';
        clearInterval(interval);
      }
    };
    update();
    interval = setInterval(() => {
      seconds++;
      update();
    }, 1000);
  });
}
