import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>

                                
        </Link>
      </p>
    </header>

  );

<body>
  
  <script src="https://unpkg.com/blip-chat-widget@1.6.*" type="text/javascript"></script>
<script>
    (function () {
        window.onload = function () {
            new BlipChat()
            .withAppKey('YOUR-APP-KEY')
            .withButton({"color":"#2CC3D6"})
            .build();
        }
    })();
</script>
</body>
}
