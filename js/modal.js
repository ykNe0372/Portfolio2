document.addEventListener('DOMContentLoaded', () => {
  // 各作品の詳細データ
  const worksData = {
    'discord-bot': {
      title: '<i class="fa-brands fa-discord"></i> ひまつぶしbotくん',
      altText: 'ひまつぶしbotくん',
      images: ['img/samples/bot_prof.png', 'img/samples/bot_commands.png'],
      videos: ['video/multi_bj.mp4', 'video/blackjack.mp4'],
      description: `
        <p>Pythonを使用して、Discord で暇つぶしが出来る bot を作成しました。現在、ルーレットやブラックジャックなどのギャンブルに加えて、人狼ゲームが実装されています！</p>
        <p>便利機能として、チップを管理できるバンク機能、デイリー報酬機能、他人にチップを渡す／他人からチップを奪う機能などが実装されています。</p>
        <p>こだわりポイントとして、複数人が同時実行しても自分の呼び出したものがどれかを分かりやすくしています。また、ブラックジャックを複数人で同時に遊ぶモードの実装にも苦戦しました。</p>
        <p>現在チップの管理をゆきねこ｡の Dropbox で行っているのですが、授業内で SQL を学んだので、この機に移行しようと考えています。</p>
      `,
      period: '～ver1.0公開: 1ヶ月（5月上旬～5月末）',
      dev: 'Python, Discord.py, Dropbox, Github Copilot, chatGPT',
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
        { url: 'https://github.com/ykNe0372/CUI_minesweeper', text: 'GitHub でコードを見る/遊ぶ' }
      ]
    },
    'ice-hopper': {
      title: '<i class="fa-solid fa-ice-cream"></i> Ice Hopper',
      altText: 'Ice Hopper',
      images: ['img/samples/U1GM-2_1.png'],
      videos: ['video/IceHopper1.mp4'],
      description: `
        <p>2025年4月に開催された、Unity 1 Week GAME JAM（お題「あい」）の参加作品です。</p>
        <p>アイスクリームの足場を乗り継いでゴールを目指す、１画面アクションゲームです。アイスの足場は時間経過で溶けて消えてしまうため、焦らずに対処することが攻略の鍵となっています！</p>
        <p>今回も友人と参加しました！ゆきねこ｡は主にプレイヤー関連の処理、床の処理、チュートリアル以外のステージ制作を担当です。</p>
      `,
      period: '1週間',
      dev: 'Unity',
      links: [
        { url: 'https://unityroom.com/games/icehopper', text: 'unityroom でプレイする' }
      ]
    },
    'akari-puzzle': {
      title: '<i class="fa-solid fa-music"></i> 音をつたえるあかりちゃん',
      altText: '音をつたえるあかりちゃん',
      images: ['img/samples/Akari_puzzle3.png', 'img/samples/Akari_puzzle1.png'],
      videos: ['video/Akari_puzzle1.mp4'],
      description: `
        <p>音符をスイッチまで運び、ギミックを作動させてゴールへ向かう倉庫番パズルゲームです。</p>
        <p>前半のステージは遊びやすい難易度になっていますが、後半のステージになるにつれて難易度が上昇しています！</p>
        <p>ステージ設計の際に、難易度の調節が非常に難しかったです。ステージの制作にはかなり時間がかかりました...</p>
      `,
      period: '約2週間（2023年12月下旬～2024年1月上旬）',
      dev: 'pygame',
      links: [
        { url: 'https://github.com/ykNe0372/oto-puzzle-game', text: 'GitHub でコードを見る/遊ぶ'}
      ]
    },
    'todo-app': {
      title: '<i class="fa-solid fa-list-check"></i> TodoApp',
      altText: 'Todoアプリ',
      images: ['img/samples/Todo_1.png', 'img/samples/Todo_2.png', 'img/samples/Todo_3.png'],
      videos: [],
      description: `
        <p>React/TypeScript/TailwindCSS を用いて、Todo アプリを作成しました。</p>
        <p>タスクの追加・編集・削除に加えて、ローカルストレージでデータを永続化しています。また、モーダルウィンドウを活用して分かりやすいデザインになるよう工夫しました。</p>
        <p>実装にあたって、編集機能の実装に時間がかかりました。イミュータブルに変更する操作になかなか慣れず、うまく画面に表示されずに苦戦していました。</p>
      `,
      period: '約1ヶ月（2024年10月末～11月末）',
      dev: 'React, TypeScript',
      links: [
        { url: 'https://ykne0372.github.io/react-todo-app/', text: 'Todo アプリを使う'},
        { url: 'https://github.com/ykNe0372/react-todo-app', text: 'GitHub でコードを見る'}
      ]
    },
    'survive': {
      title: '<i class="fa-solid fa-heart-circle-exclamation"></i> 殲滅サバイブ',
      altText: '殲滅サバイブ',
      images: ['img/samples/Survive.png'],
      videos: ['video/survive.mp4'],
      description: `
        <p>高専祭の展示用に、某作品を基にしたゲームをクラスメイトと作成しました。</p>
        <p>敵を倒して強化アイテムを集め、5分間生き残るというシンプルなルールになっています。</p>
        <p>ステージ制作・UI・ゲームバランス調整・デバッグなどを行いました。</p>
        <p>（実は今年の展示の際に不具合が発覚したため、近いうちに修正を行う予定です）</p>
      `,
      period: '約2ヶ月',
      dev: 'Unity',
      links: [
        { url: 'https://unityroom.com/games/sennmetsu_survive', text: 'unityroom でプレイする'}
      ]
    },
    'collect-money': {
      title: '<i class="fa-solid fa-wallet"></i> お金がないなら集めればいい',
      altText: 'お金がないなら集めればいい',
      images: ['img/samples/U1GM-1_3.png', 'img/samples/U1GM-1_1.png', 'img/samples/U1GM-1_2.png'],
      videos: ['video/u1-1_1.mp4'],
      description: `
        <p>2024年12月に開催された Unity 1Week GAME JAM（お題「ない」）の参加作品です。友人と2人で参加しました。</p>
        <p>自販機下に流れるお金をかき集めて、財布を爆発させるのが目標です。2,000円集めれば爆発してくれるので、頑張って爆発させましょう。</p>
        <p>主にコーディングを担当しました。Unity への理解が甘く、毎日12時間以上を開発に費やす羽目になりましたが、何とか完成して良かったです！</p>
      `,
      period: '1週間',
      dev: 'Unity',
      links: [
        { url: 'https://unityroom.com/games/non-money-saihubakuhatu', text: 'unityroom でプレイする'}
      ]
    },
    'blog-app': {
      title: '<i class="fa-solid fa-blog"></i> ブログアプリ',
      altText: 'ブログアプリ',
      images: ['img/samples/blog_1.png', 'img/samples/blog_3.png', 'img/samples/blog_4.png'],
      videos: [],
      description: `
        <p>TypeScript/Next.js/prisma を用いて、ブログアプリを作成しました。</p>
        <p>基本機能である記事の新規作成・編集・削除に加えて、検索と並び替えの機能を実装し、なるべく使いやすいブログアプリになるよう工夫しました。</p>
        <p>記事の作成を行う為には、ログインする必要があります（ただし、ゆきねこ｡以外はログインすることは出来ませんので、ご了承ください）。</p>
      `,
      period: '約3ヶ月（2024年11月中旬～2025年2月下旬）',
      dev: 'TypeScript, Next.js, prisma, Supabase, Vercel',
      links: [
        { url: 'https://github.com/ykNe0372/next-blog-app', text: 'GitHub でコードを見る'}
      ]
    },
    'shooting': {
      title: '<i class="fa-solid fa-person-rifle"></i> シューティングゲーム',
      altText: 'シューティングゲーム',
      images: ['img/samples/controller.jpg', 'img/samples/blank.jpg'],
      videos: [],
      description: `
        <p>高専祭の展示用に、シューティングゲームをクラスメイトと作成しました。</p>
        <p>コントローラーを設計・制作してもらい、実際に銃を撃つような体感型ゲームに仕上がりました。リロード機能などもついています。</p>
        <p>主に敵キャラクターのデザインと作画を担当しました。空き時間にプログラム班の壁打ち相手にもなりました。</p>
      `,
      period: '約1ヶ月（2024年10月上旬～11月上旬）',
      dev: 'Unity',
      links: []
    },
    'rps': {
      title: '<i class="fa-regular fa-hand-scissors"></i> じゃんけんシミュレーター',
      altText: 'じゃんけんシミュレーター',
      images: ['img/samples/RPS.png'],
      videos: [],
      description: `
        <p>Google Colab. を使用し、じゃんけんのシミュレーターを作成しました。</p>
        <p>じゃんけんだけだと味気なかったので、あっち向いてほいも実装しました。</p>
        <p>（初めてプログラムを書いて作った作品なので、条件文の部分などがかなりひどいですが、大目に見てください）</p>
      `,
      period: '約10時間',
      dev: 'Google Colab.',
      links: [
        { url: 'https://github.com/ykNe0372/Rock-Paper-Scissors', text: 'GitHub でコードを見る/遊ぶ'}
      ]
    },
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
      ).join(' / ');
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