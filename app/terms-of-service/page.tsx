'use client'
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <main className='flex min-h-screen flex-col items-center justify-center pt-24 pb-10 p-4'>
                <div className='max-w-3xl w-full'>
                    <div className='flex justify-center pb-16'>
                        <Image
                            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                            src='/images/logo.png'
                            alt='Banana Logo'
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                    <h1 className='text-4xl font-bold text-center mb-10'>
                        Terms of Service
                    </h1>
                    <div className='space-y-8 text-left'>
                        <p className='text-lg text-primary'>
                            Effective Date: November 5, 2026
                        </p>
                        <p className='text-lg text-primary'>
                            Welcome to Banana! By using this app, you agree to these Terms of Service.
                            Please read them carefully.
                        </p>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                1. Use of the App
                            </h2>
                            <p className='text-lg text-primary'>
                                You may use the app for personal, non-commercial entertainment purposes.
                                You must not use the app in any unlawful or harmful way.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                2. Intellectual Property
                            </h2>
                            <p className='text-lg text-primary'>
                                All content in the app, including text, graphics, game design, and branding, is owned by the developer.
                                You may not copy, reproduce, or distribute any part of the app without permission.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                3. Google Play Games and Your Progress
                            </h2>
                            <p className='text-lg text-primary'>
                                Achievements, the leaderboard, and saving your progress use Google Play Games, which is subject to Google's own terms.
                                Your tap count is saved through Google Play Games, so progress made while you are not signed in may be lost.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                4. Advertising
                            </h2>
                            <p className='text-lg text-primary'>
                                Banana is free to play and is supported by ads shown through Google AdMob.
                                By using the app, you agree to the display of these ads unless you have purchased ad removal.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                5. Purchases and Subscriptions
                            </h2>
                            <p className='text-lg text-primary'>
                                The app may offer optional purchases: removing ads through a weekly or monthly subscription or a one-time lifetime purchase, and cosmetic items.
                                Prices are shown in the app before you buy.
                                All payments are processed by Google Play and are also subject to Google Play's terms.
                            </p>
                            <p className='text-lg text-primary'>
                                Subscriptions renew automatically at the end of each billing period until you cancel.
                                You can cancel at any time in Google Play at <a className='underline' href='https://play.google.com/store/account/subscriptions' target='_blank' rel='noopener noreferrer'>play.google.com/store/account/subscriptions</a>, and your subscription stays active until the end of the period you have paid for.
                                If an offer includes a free trial or introductory price, the regular price is charged when it ends unless you cancel first.
                            </p>
                            <p className='text-lg text-primary'>
                                Lifetime purchases last for as long as the app is available.
                                Purchases are tied to your Google account and can be restored on a new device or after reinstalling by using the restore option in the app.
                                Refunds are handled under Google Play's refund policies and applicable law.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                6. No Warranties
                            </h2>
                            <p className='text-lg text-primary'>
                                The app is provided "as is" without any warranties.
                                We do not guarantee that the app will be error-free, uninterrupted, or available at all times.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                7. Limitation of Liability
                            </h2>
                            <p className='text-lg text-primary'>
                                We are not liable for any damages or losses resulting from your use of the app.
                                This includes indirect, incidental, or consequential damages.
                            </p>
                            <p className='text-lg text-primary'>
                                Nothing in these Terms limits your mandatory consumer rights or any liability that cannot be limited by law.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                8. User Conduct
                            </h2>
                            <p className='text-lg text-primary'>
                                You agree not to misuse the app, reverse-engineer its code, or use it to harm others or collect data unlawfully.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                9. Termination
                            </h2>
                            <p className='text-lg text-primary'>
                                We may suspend or terminate your access to the app at any time, without notice, if you violate these terms.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                10. Changes to Terms
                            </h2>
                            <p className='text-lg text-primary'>
                                We may update these Terms of Service at any time.
                                If changes are significant, we will notify you in the app or on our website.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                11. Contact
                            </h2>
                            <p className='text-lg text-primary'>
                                If you have any questions about these Terms, contact us at <a className='underline' href='mailto:support@zrilich.com'>support@zrilich.com</a>.
                            </p>
                        </section>
                    </div>
                    <div className='mt-12 text-center'>
                        <a
                            className='inline-block text-primary hover:underline'
                            href='/'
                        >← Back</a>
                    </div>
                </div>
            </main>
        </>
    );
}
