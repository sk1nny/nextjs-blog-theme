import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>

<script src="https://unpkg.com/blip-chat-widget" type="text/javascript">
</script>
<script>
    (function () {
        window.onload = function () {
            new BlipChat()
            .withAppKey('dHJhdGF0aXZhc29maWNpYWwxeDI4bWVxbHNuazY6ZjVlYzNjZTMtYzExMC00Njk1LTliYzAtZDRjZThjZWVmYzY0')
            .withButton({"color":"#2CC3D5","icon":""})
            .withCustomCommonUrl('https://yago-luiz-hillesheim-81lzw.chat.blip.ai/')
            .build();
        }
    })();
</script>
                                
        </Link>
      </p>
    </header>
  );
}
