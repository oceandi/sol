function createFooter() {
    const footerContent = `
        <div class="five">
            <div class="endofpage">
                <p>Diğer alışveriş seçenekleri: Yakınınızda <a class="underline" href="#">bir Turkcell İletişim Merkezi</a> veya <a class="underline" href="#">başka bir satış temsilcisi</a> bulun. Veya 0224 999 5858 ya da 0532 532 00 00 numaralı telefonu arayın.</p>
                <div class="divider"></div>
                <p>Telif Hakkı © 2025 Turkcell Superonline DehaNet | Ev Çözüm Merkezi. Tüm hakları saklıdır.</p>
                <ul class="legal">
                    <a href="#"><li class="legalli">Gizlilik Politikası</li></a>
                    <a href="#"><li class="legalli">Çerezlerin Kullanımı</li></a>
                    <a href="#"><li class="legalli">Kullanım Şartları</li></a>
                    <a href="#"><li class="legalli">Cayma Hakkı</li></a>
                    <a href="#"><li class="legalli">Yasal Bilgiler</li></a>
                    <a href="https://vknsorgula.net/2730624106.html"><li class="legalli">Bilgi Toplumu Hizmetleri</li></a>
                </ul>
            </div>
        </div>
    `;
    document.querySelector('.desktop').insertAdjacentHTML('beforeend', footerContent);
}

document.addEventListener('DOMContentLoaded', createFooter);