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
                        Privacy Policy
                    </h1>
                    <div className='space-y-8 text-left'>
                        <p className='text-lg text-primary'>
                            Effective Date: November 5, 2026
                        </p>
                        <p className='text-lg text-primary'>
                            Thank you for playing Banana.
                            Banana is developed by ZrilicH ("we" or "us").
                            This policy explains what information the app handles, who handles it, and the choices you have.
                        </p>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Information We Collect
                            </h2>
                            <p className='text-lg text-primary'>
                                Banana does not ask you to create an account with us, and we do not run our own servers for the app, so we do not directly collect or store your personal data.
                                The app does use Google services that handle information as described below.
                            </p>
                            <p className='text-lg text-primary'>
                                The items you have equipped, your sound and haptics settings, and whether you have removed ads are stored on your device.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Google Play Games
                            </h2>
                            <p className='text-lg text-primary'>
                                When you open the app, it tries to sign you in to Google Play Games.
                                This is used for achievements, the leaderboard, and saving your tap count to your Play Games cloud save.
                                Your Play Games profile, such as your gamer name and avatar, is handled by Google.
                            </p>
                            <p className='text-lg text-primary'>
                                Your tap count is saved only in your cloud save, so if you are not signed in, your taps are not kept when you close the app.
                                Your score and achievements are sent to Google Play Games, and your score can be shown to other players on the leaderboard with your Play Games profile, depending on your Play Games settings.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Advertising
                            </h2>
                            <p className='text-lg text-primary'>
                                Banana shows banner and full-screen ads served through Google AdMob.
                                To show and measure these ads, AdMob may collect information such as your device's advertising identifier, general device information, your IP address, and approximate location.
                                Depending on your settings, this may be used to show ads that are more relevant to you.
                            </p>
                            <p className='text-lg text-primary'>
                                We do not receive or store this information ourselves.
                                It is handled by Google in accordance with Google's own privacy policy, which you can read at <a className='underline' href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>policies.google.com/privacy</a>.
                                You can review or change your ad personalization settings at any time through your device's settings.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Purchases
                            </h2>
                            <p className='text-lg text-primary'>
                                Purchases in the app, such as removing ads or buying cosmetic items, are processed by Google Play.
                                We do not receive your payment details.
                                The app only receives confirmation of which items you own, and stores your remove-ads status on your device.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Analytics
                            </h2>
                            <p className='text-lg text-primary'>
                                We may use Google Analytics for Firebase to understand how the app is used and improve it.
                                This can involve an app instance identifier, device information, and information about how you use the app.
                                This information is handled by Google.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Connection Checks
                            </h2>
                            <p className='text-lg text-primary'>
                                To tell whether you are online, the app sends simple requests to public services run by Cloudflare, icanhazip.com, Google and Apple.
                                As with any internet request, these services can see your IP address.
                                The requests contain no game data or information about you.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                How We Use Information
                            </h2>
                            <p className='text-lg text-primary'>
                                Information is used to run the game, save your progress, provide purchases, show ads that fund the app, and keep the app working properly.
                            </p>
                            <p className='text-lg text-primary'>
                                If you are in the European Economic Area, the UK, or a place with similar laws, we handle information to provide the game and the purchases you ask for, and because we have a legitimate interest in running, securing and funding the app.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Data Sharing
                            </h2>
                            <p className='text-lg text-primary'>
                                We do not sell or trade your personal information.
                                Information is only shared with the Google and connection-check services described in this policy.
                            </p>
                            <p className='text-lg text-primary'>
                                Google may process information on servers outside your country, including in the United States, as described in its privacy policy.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Keeping and Deleting Your Data
                            </h2>
                            <p className='text-lg text-primary'>
                                Information stored on your device stays there until you clear the app's data or uninstall it.
                            </p>
                            <p className='text-lg text-primary'>
                                Your Play Games data, including your cloud save, is kept by Google until you delete it, which you can do through Google Play Games or your Google Account.
                                Advertising and purchase information is kept by Google under its own policies.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Your Rights
                            </h2>
                            <p className='text-lg text-primary'>
                                If you are in the European Economic Area, the UK, or a place with similar laws, you can ask for access to your personal data, and ask us to correct or delete it, restrict or object to how it is used, or provide it in a portable format.
                                You can also complain to your local data protection authority.
                            </p>
                            <p className='text-lg text-primary'>
                                We do not hold an account or profile for you, so most requests are best made through your Google Account.
                                For anything else, contact us at <a className='underline' href='mailto:kazrile@gmail.com'>kazrile@gmail.com</a>.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Children's Privacy
                            </h2>
                            <p className='text-lg text-primary'>
                                This game is intended for general audiences and is not directed at children under 13, or under the minimum age for using online services without parental consent in your country.
                                We do not knowingly collect personal information from children under these ages.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Changes to This Policy
                            </h2>
                            <p className='text-lg text-primary'>
                                We may update this policy from time to time.
                                If we make material changes, we will notify you within the app or on our website.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Contact Us
                            </h2>
                            <p className='text-lg text-primary'>
                                If you have any questions about this Privacy Policy, please contact us at <a className='underline' href='mailto:kazrile@gmail.com'>kazrile@gmail.com</a>.
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
