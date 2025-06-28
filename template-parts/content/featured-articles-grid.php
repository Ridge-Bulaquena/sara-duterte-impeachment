
<?php
/**
 * Template part for displaying Featured Articles Grid
 *
 * @package kadence
 */

namespace Kadence;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get articles for pro and anti sides
$pro_articles = array(
	array(
		'title' => "Sara's Leadership Vision",
		'summary' => "An in-depth analysis of Sara's progressive policies and their potential impact on economic growth and social equality.",
		'slug' => 'sara-leadership-vision'
	),
	array(
		'title' => "Community Support Stories", 
		'summary' => "Real testimonials from community members who have benefited from Sara's grassroots initiatives and local programs.",
		'slug' => 'community-support-stories'
	),
	array(
		'title' => "Policy Innovation Spotlight",
		'summary' => "Breaking down Sara's innovative approaches to healthcare, education, and environmental sustainability.",
		'slug' => 'policy-innovation-spotlight'
	)
);

$anti_articles = array(
	array(
		'title' => "Economic Concerns Raised",
		'summary' => "Critical examination of the potential economic implications and fiscal responsibility questions surrounding current proposals.",
		'slug' => 'economic-concerns-raised'
	),
	array(
		'title' => "Alternative Perspectives",
		'summary' => "Exploring different viewpoints and alternative solutions to address the same challenges facing our community.",
		'slug' => 'alternative-perspectives'
	),
	array(
		'title' => "Implementation Challenges",
		'summary' => "Analyzing potential obstacles and practical difficulties in executing proposed policy changes and reforms.",
		'slug' => 'implementation-challenges'
	)
);
?>

<section class="featured-articles-grid py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-gray-900 mb-4" style="font-family: 'Figtree', sans-serif;">
				Featured Articles
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto" style="font-family: 'Figtree', sans-serif;">
				Explore different perspectives on the issues that matter most
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Pro Side - In Defense of Sara -->
			<div class="space-y-6">
				<div class="text-center">
					<h3 class="text-2xl font-semibold text-emerald-700 mb-2" style="font-family: 'Figtree', sans-serif;">
						In Defense of Sara
					</h3>
					<div class="w-24 h-1 bg-emerald-500 mx-auto"></div>
				</div>
				
				<div class="space-y-6">
					<?php foreach ( $pro_articles as $article ) : ?>
						<article class="featured-article-card bg-emerald-50 border border-emerald-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
							<header class="mb-4">
								<h4 class="text-xl font-semibold text-gray-900" style="font-family: 'Figtree', sans-serif;">
									<?php echo esc_html( $article['title'] ); ?>
								</h4>
							</header>
							<div class="space-y-4">
								<p class="text-gray-700 leading-relaxed" style="font-family: 'Figtree', sans-serif;">
									<?php echo esc_html( $article['summary'] ); ?>
								</p>
								<a href="<?php echo esc_url( home_url( '/article/' . $article['slug'] ) ); ?>" 
								   class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
								   style="font-family: 'Figtree', sans-serif;">
									Read More
								</a>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>

			<!-- Anti Side - The Case Against Her -->
			<div class="space-y-6">
				<div class="text-center">
					<h3 class="text-2xl font-semibold text-red-700 mb-2" style="font-family: 'Figtree', sans-serif;">
						The Case Against Her
					</h3>
					<div class="w-24 h-1 bg-red-500 mx-auto"></div>
				</div>
				
				<div class="space-y-6">
					<?php foreach ( $anti_articles as $article ) : ?>
						<article class="featured-article-card bg-red-50 border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
							<header class="mb-4">
								<h4 class="text-xl font-semibold text-gray-900" style="font-family: 'Figtree', sans-serif;">
									<?php echo esc_html( $article['title'] ); ?>
								</h4>
							</header>
							<div class="space-y-4">
								<p class="text-gray-700 leading-relaxed" style="font-family: 'Figtree', sans-serif;">
									<?php echo esc_html( $article['summary'] ); ?>
								</p>
								<a href="<?php echo esc_url( home_url( '/article/' . $article['slug'] ) ); ?>" 
								   class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
								   style="font-family: 'Figtree', sans-serif;">
									Read More
								</a>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
.featured-articles-grid {
	font-family: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.featured-article-card {
	transition: all 0.3s ease;
}

.featured-article-card:hover {
	transform: translateY(-2px);
}

@media (max-width: 1024px) {
	.featured-articles-grid .grid {
		grid-template-columns: 1fr;
		gap: 3rem;
	}
}

@media (max-width: 640px) {
	.featured-articles-grid {
		padding: 2rem 1rem;
	}
	
	.featured-articles-grid .text-4xl {
		font-size: 2rem;
	}
	
	.featured-article-card {
		padding: 1.5rem;
	}
}
</style>
