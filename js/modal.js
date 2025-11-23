document.addEventListener('DOMContentLoaded', () => {
  // 各作品の詳細データ
  const worksData = {
    'discord-bot': {
      title: '<i class="fa-brands fa-discord"></i> ひまつぶしbotくん',
      altText: 'ひまつぶしbotくん',
      images: ['img/samples/bot_prof.png', 'img/samples/bot_commands.png'],
      videos: ['video/multi_bj.mp4', 'video/blackjack.mp4'],
      description: `
        <p>Pythonを使用して、Discord で暇つぶしが出来る bot を作成しました。現在、ルーレットやブラックジャックによるギャンブル、人狼ゲームが実装されています！</p>
        <p>便利機能として、チップを管理できるバンク機能、デイリー報酬機能、他人にチップを渡す／他人からチップを奪う機能などが実装されています。</p>
        <p>こだわりポイントとして、各人がバラバラに実行すると自分の手札がどれか分からなくなるという意見があったため、ブラックジャックに複数人同時に遊ぶモードを実装しました。管理するべき要素が非常に多く、とても実装が難しかったです...！</p>
        <p>また、bot の更新時にチップが無くなってしまうという不具合が発生してしまったのですが、Dropbox にチップを保存するシステムを実装することで解決しました。TOKEN の取得が難しくかなり苦戦しましたが、生成AIを活用して実装することが出来ました！</p>
      `,
      period: '1ヶ月（5月上旬～5月末）',
      dev: 'Python、Discord.py、Dropbox、Github Copilot、chatGPT',
      links: []
    },
    'minesweeper': {
      title: '<i class="fa-solid fa-flag"></i> 特殊ルールマインスイーパー',
      altText: '特殊ルールマインスイーパー',
      images: ['img/samples/CUI_minesweeper.png', 'img/samples/CUI_ruleChoice.png'],
      videos: ['video/minesweeper.mp4'],
      description: `
        <p>C++のみを用いて、マインスイーパーを作成しました。プールアロケーターを用いて、メモリの確保を行っており、動作の高速化を図っています。</p>
        <p>14 Minesweeper Variants という特殊ルール付きのマインスイーパーが好きなので、二つルールを再現してみました。本家様のように特殊ルールを巧みに使った手筋などはありませんが、ルールが作れただけでも良かったです。</p>
        <p>工夫点として、理不尽なゲームオーバーを避けるために、最初は確定でマスが開けられるように設定しています。また、数字や旗に色を付けることで、ターミナル上での見やすさにこだわりました。</p>
      `,
      period: '3日（2025年8月下旬）',
      dev: 'C++',
      links: [
        { url: 'https://github.com/ykNe0372/CUI_minesweeper', text: 'GitHubでコードを見る' }
      ]
    },
    'ice-hopper': {
      title: '<i class="fa-solid fa-ice-cream"></i> Ice Hopper',
      altText: 'Ice Hopper',
      images: ['img/samples/U1GM-2_1.png'],
      videos: ['video/IceHopper1.mp4'],
      description: `
        <p>2025年4月に開催された、Unity 1-Week GAME JAM（お題「あい」）の参加作品です。</p>
        <p>アイスクリームの足場を乗り継いでゴールを目指す、１画面アクションゲームです。アイスの足場は時間経過で溶けて消えてしまうため、焦らずに対処することが攻略の鍵となっています！</p>
        <p>今回も友人と参加しました！ゆきねこ｡は主にプレイヤー関連の処理、床の処理、チュートリアル以外のステージ制作を担当です。</p>
      `,
      period: '1週間',
      dev: 'Unity',
      links: [
        { url: 'https://unityroom.com/games/icehopper', text: 'unityroomでプレイする' }
      ]
    },
    '': {
      title: '<i class="fa-solid fa-music"></i> 音をつたえるあかりちゃん',
      altText: '音をつたえるあかりちゃん',
      images: ['img/samples/Akari_puzzle3.png', 'img/samples/Akari_puzzle1.png'],
      videos: ['video/Akari_puzzle1.mp4'],
      description: `
        <p>せつめいせつめいせつめいせつめい</p>
      `
    }
    // 作品データ追加はここに⛄
  };

  // モーダル関連の要素を取得
  const workCards = document.querySelectorAll('.work-card');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalContainer = document.querySelector('.modal-container');

  // カードクリック時の処理
  workCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.modalTarget;
      const data = worksData[targetId];

      if (data) {
        updateModalContent(data);
        openModal();
      }
    });
  });

  function openModal() {
    modal.classList.add('is-active');
  }
  function closeModal() {
    modal.classList.remove('is-active');
  }

  // モーダルの内容を更新する関数
  function updateModalContent(data) {
    // スライダー用のHTMLを生成
    let mediaHtml = '<div class="modal-slider">';
    if (data.images) {
      data.images.forEach(src => {
        mediaHtml += `<div><img src="${src}" alt="${data.altText}"></div>`;
      });
    }
    if (data.videos) {
      data.videos.forEach(src => {
        mediaHtml += `<div><video src="${src}" controls muted></video></div>`;
      });
    }
    mediaHtml += '</div>';

    let metaHtml = '<div class="modal-meta">';
    metaHtml += `<span class="modal-meta-item"><i class="fa-regular fa-clock"></i> <strong>制作期間:</strong> ${data.period}</span>`;
    metaHtml += `<span class="modal-meta-item"><i class="fa-solid fa-wrench"></i> <strong>開発:</strong> ${data.dev}</span>`;

    if (data.links.length > 0) {
      const linkItems = data.links.map(link =>
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="underline_anim">${link.text}</a>`
      ).join(', ');
      metaHtml += `<span class="modal-meta-item"><i class="fa-solid fa-link"></i> <strong>リンク:</strong> ${linkItems}</span>`;
    }
    metaHtml += '</div>';

    modalContainer.innerHTML = `
      <button class="modal-close">&times;</button>
      <h3 class="works-title" style="border-bottom: 4px dotted #3da; padding-bottom: 1.5%;">${data.title}</h3>
      ${mediaHtml}
      ${data.description}
      ${metaHtml}
    `;

    // 動的に追加した閉じるボタンにイベントリスナーを再設定
    modalContainer.querySelector('.modal-close').addEventListener('click', closeModal);

    // HTMLを挿入した後にSlickを初期化
    $('.modal-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300
    });
  }

  modalOverlay.addEventListener('click', closeModal);
});